#!/usr/bin/env node
'use strict';
const { execSync } = require('child_process');
const fs = require('fs');
const { dirname, join, parse } = require('path');
const {
  readFileSync,
  writeFileSync,
  existsSync,
  rmSync,
  mkdirSync,
  copyFileSync,
  readdirSync,
} = require('fs');
let args = process.argv.splice(2).join(' ');
const isVue = args.includes('/vue');
const isSolid = args.includes('/solid');
const isSvelte = args.includes('/svelte');
const isMinimal = args.includes('/minimal');
const isV4 = isVue || isSolid || isSvelte || args.includes('/tanstack');
// this one might be useful if you only want to have
// to initialize Axios and baseUrl from a single place
const noHooks = args.includes('/no-hooks');

let pathToTemplates = process.mainModule.filename
  .replace('cli.js', 'templates')
  .replace('.bin/react-query-swagger', 'react-query-swagger/templates');

if (isVue) {
  pathToTemplates = pathToTemplates.replace(/templates$/, 'templates_vue');
} else if (isMinimal) {
  pathToTemplates = pathToTemplates.replace(/templates$/, 'templates_minimal');
}
if (noHooks) {
  if (isVue) {
    throw new Error('/no-hooks option is incompatible with /vue');
  } else if (isSolid) {
    throw new Error('/no-hooks option is incompatible with /solid');
  } else if (isSvelte) {
    throw new Error('/no-hooks option is incompatible with /svelte');
  } else if (isV4) {
    throw new Error('/no-hooks option is incompatible with /tanstack');
  }
  pathToTemplates = pathToTemplates.replace(/templates$/, 'templates_no_hooks');
} else if (!isV4) {
  pathToTemplates = pathToTemplates.replace(/templates$/, 'templates_v3');
}

if (args.includes('/use-recommended-configuration')) {
  // otherwise optional parameters are generated as mandatory
  // E.g.:
  // -true:  deletePet(petId: number, api_key?: string | null | undefined)
  // -false: deletePet(petId: number, api_key: string | null | undefined)
  args += ' /generateOptionalParameters:true';

  // otherwise, if `typeStyle` is `Inteface`, there's no code to convert `Date` objects
  args += ' /typeStyle:Class';

  /* otherwise PATCH dtos have all their properties defined as mandatory:
   * export interface PatchUserDto {
   *     userName!: string | null; // should be: userName?: string | null;
   * }
   */
  args += ' /markOptionalProperties:true';

  /*
   *  If we use `null` as null value, unnecessary code gets added to `.toJSON()` and `.init()` functions:
   *  - toJSON(data?: any) {  // nullValue:undefined
   *      data = typeof data === 'object' ? data : {};
   *      data["enabled"] = this.enabled;
   *      ...
   *
   *  - toJSON(data?: any) {  // nullValue:null
   *      data = typeof data === 'object' ? data : {};
   *      data["enabled"] = this.enabled !== undefined ? this.enabled : <any>null;
   *
   *
   *  - init(_data?: any) {  // nullValue:undefined
   *     if (_data) {
   *         this.enabled = _data["enabled"];
   *         ...
   *
   *  - init(_data?: any) {  // nullValue:null
   *     if (_data) {
   *         this.enabled = _data["enabled"] !== undefined ? _data["enabled"] : <any>null;
   *
   */
  args += ' /nullValue:undefined';

  /*
   * This gives a typed-possibility to create classes from interfaces (otherwise you have to use `init(_data?: any)` method)
   */
  args += ' /generateConstructorInterface:true';

  /*
   * We need this to be able to use both `undefined` and `null` as values in PATCH requests
   */
  args += ' /fix-null-undefined-serialization';

  /*
   * This flag places each Client class into separate file and converts it to a module (removing the class declaration)
   * This makes clients tree-shakable, since the bundler could remove functions that are not actually used in code.
   * This flag is incompatible with /clientBaseClass and /generateClientInterfaces
   */
  args += ' /modules';
}

const isClientsAsModules =
  args.includes('/modules') || args.includes('/clients-as-modules');
const extractTypes = args.includes('/extract-types') || isMinimal;
if (isClientsAsModules) {
  if (
    args.includes('/clientBaseClass') ||
    args.includes('/generateClientInterfaces')
  ) {
    console.error(
      '/clients-as-modules flag is incompatible with /clientBaseClass and /generateClientInterfaces',
    );
    throw new Error(
      '/clients-as-modules flag is incompatible with /clientBaseClass and /generateClientInterfaces',
    );
  }
}

const sourceFolder = isClientsAsModules ? 'modules' : 'original';
copyFileSync(
  join(pathToTemplates, sourceFolder, 'AxiosClient.liquid'),
  join(pathToTemplates, '_AxiosClient.liquid'),
);
copyFileSync(
  join(pathToTemplates, sourceFolder, 'FetchClient.liquid'),
  join(pathToTemplates, '_FetchClient.liquid'),
);
readdirSync(join(pathToTemplates, sourceFolder))
  .filter(
    (fileName) =>
      fileName !== 'AxiosClient.liquid' && fileName !== 'FetchClient.liquid',
  )
  .forEach((fileName) => {
    copyFileSync(
      join(pathToTemplates, sourceFolder, fileName),
      join(pathToTemplates, fileName),
    );
  });
if (isMinimal) {
  // replace
  // const content_ = JSON.stringify({{ operation.ContentParameter.VariableName }});
  // with
  // const content_ = Types.serialize{{ operation.ContentParameter.ClassName }}({{ operation.ContentParameter.VariableName }});
  patchTemplateFile(pathToTemplates, 'Client.RequestBody.liquid', (content) =>
    content.replace(
      'const content_ = JSON.stringify({{ operation.ContentParameter.Type }});',
      'const content_ = Types.serialize{{ operation.ContentParameter.Type }}({{ operation.ContentParameter.VariableName }});',
    ),
  );
}

const isYarn = process.env.npm_execpath.includes('yarn');
const cliExecutor = isYarn ? 'yarn' : 'npx';
const toExecute = `${cliExecutor} nswag openapi2tsclient /templateDirectory:"${pathToTemplates}" /typeScriptVersion:"4" ${args}`;
try {
  execSync(toExecute, function (e, stdout, stderr) {
    console.log(stdout);
  });
} catch (e) {
  throw new Error(e?.output?.toString());
}

const outputRegex =
  args.match(/\/output:"(?<path>.*?)"/) || args.match(/\/output:(?<path>\S*)/);
const outputPath = outputRegex?.groups?.['path'];
if (!outputPath) {
  throw new Error('Unable to parse "/output" option from command line args');
}
const outputDir = dirname(outputPath);
const outputFileWithoutExtension = parse(outputPath).name;

if (args.includes('/fix-null-undefined-serialization')) {
  let apiClient = readFileSync(outputPath, 'utf-8');

  // Replace DTO type definitions:
  // export interface IUser {
  //   id?: number | undefined;   ->  id?: number | null;
  // }
  // Replaced because this is what server (at least .NET :)) actually returns
  apiClient = apiClient.replaceAll('| undefined;', '| null;');

  /* this changes `init()` function to be like:
   * this.lastChangeDateTime = _data["lastChangeDateTime"] ? new Date(_data["lastChangeDateTime"].toString()) : <any>undefined;
   * to
   * this.lastChangeDateTime = _data["lastChangeDateTime"] ? new Date(_data["lastChangeDateTime"].toString()) : <any>null;
   *
   * Again, server actually returns `null`, we don't want to change that.
   */
  apiClient = apiClient.replaceAll(': <any>undefined', ': <any>null');

  /*
   * Perform the following change (in `toJSON()` method):
   * data["shipDate"] = this.shipDate ? this.shipDate.toISOString() : <any>null;
   * to
   * data["shipDate"] = this.shipDate && this.shipDate.toISOString();
   *
   * This is to be able to send both `undefined` and `null` to the server (important for PATCH requests)
   */
  apiClient = apiClient.replaceAll(
    /\? this\.(.*?)\.toISOString\(\) : <any>null/gim,
    '&& this.$1.toISOString()',
  );

  /*
   * Perform the following change (in `toJSON()` method):
   * data["shipDate"] = this.shipDate ? formatDate(this.shipDate) : <any>null;
   * to
   * data["shipDate"] = this.shipDate && formatDate(this.shipDate);
   *
   * This is to be able to send both `undefined` and `null` to the server (important for PATCH requests)
   */
  apiClient = apiClient.replaceAll(
    /\? formatDate\((.*?)\) : <any>null/gim,
    '&& formatDate($1)',
  );

  writeFileSync(outputPath, apiClient);
}
if (isVue) {
  let apiClient = readFileSync(outputPath, 'utf-8');

  apiClient = apiClient.replaceAll(
    /@tanstack\/react-query/gim,
    '@tanstack/vue-query',
  );
  apiClient = apiClient.replaceAll(
    /\s+const metaContext = useContext\(QueryMetaContext\);/gim,
    '',
  );
  apiClient = apiClient.replaceAll(
    /\s+options = addMetaToOptions\(options, metaContext\);/gim,
    '',
  );

  apiClient = apiClient
    .replaceAll(/UseQueryResult/gim, 'UseQueryReturnType')
    .replaceAll(/UseMutationResult/gim, 'UseMutationReturnType');

  writeFileSync(outputPath, apiClient);
}

// we will extract every Controller into separate file.
// these files will be put in `queryFolderName` directory (with the same name as the output file)
const queryFolderName = outputFileWithoutExtension;
const queryDir = join(outputDir, queryFolderName);
if (existsSync(queryDir)) {
  rmSync(queryDir, { recursive: true, force: true });
}
mkdirSync(queryDir);

if (isClientsAsModules) {
  let apiClient = readFileSync(outputPath, 'utf-8');

  const clientClasses = apiClient.matchAll(
    /\/\/-----ClientClass--(?<name>[^-]*)---(?<content>[\s\S]*?)\/\/-----\/ClientClass----/gims,
  );
  for (let clientClass of clientClasses) {
    let { name, content } = clientClass.groups;
    const foundText = clientClass[0];
    const fileName = join(queryDir, `${name}.ts`);

    apiClient = apiClient.replace(
      foundText,
      `export * as ${name} from './${queryFolderName}/${name}';`,
    );
    content = postProcessClientContent(
      content,
      outputFileWithoutExtension,
      false,
    );

    writeFileSync(fileName, content);
  }

  apiClient = apiClient
    .replace('function throwException', 'export function throwException')
    .replace('function isAxiosError', 'export function isAxiosError')
    .replace('function formatDate', 'export function formatDate')
    .replace(
      "import axios, { AxiosError } from 'axios';",
      "import type { AxiosError } from 'axios';",
    );
  writeFileSync(outputPath, apiClient);
}

if (true) {
  // split react-query Controller per file
  let apiClient = readFileSync(outputPath, 'utf-8');

  if (isClientsAsModules && extractTypes) {
    const types = apiClient.match(
      /\/\/-----Types\.File-----(?<content>.*?)\/\/-----\/Types.File-----/gims,
    );
    apiClient = apiClient.replace(types[0], '');

    let clientContent = types[0];
    clientContent = clientContent
      .replaceAll(/Types\.init/g, 'init')
      .replaceAll(/Types\.deserialize/g, 'deserialize');
    if (isMinimal) clientContent = processForMinimalApi(clientContent);

    writeFileSync(
      join(outputDir, `${outputFileWithoutExtension}.types.ts`),
      clientContent,
    );
  }

  apiClient = extractQueryHelperFunctions(apiClient, queryDir);

  const queryClasses = apiClient.matchAll(
    /\/\/-----ReactQueryClass--(?<name>[^-]*)---(?<content>[\s\S]*?)\/\/-----\/ReactQueryClass----/gims,
  );
  for (let queryClass of queryClasses) {
    let { name, content } = queryClass.groups;
    const foundText = queryClass[0];
    const fileName = join(queryDir, `${name}.ts`);

    content = postProcessClientContent(
      content,
      outputFileWithoutExtension,
      true,
    );
    if (content) {
      writeFileSync(fileName, content);
      apiClient = apiClient.replace(
        foundText,
        `export * as ${name} from './${queryFolderName}/${name}';`,
      );
    } else {
      apiClient = apiClient.replace(foundText, ``);
    }
  }

  apiClient = apiClient
    .replaceAll(`from './helpers';`, `from './${queryFolderName}/helpers';`)
    .replaceAll(/from '.\/client/g, `from '.\/${outputFileWithoutExtension}`);
  writeFileSync(outputPath, apiClient);
}

function extractQueryHelperFunctions(apiClient, queryDir) {
  const helperFunctionsMatch = apiClient.match(
    /\/\/-----ReactQueryFile-----(?<content>[\s\S]*?)\/\/-----\/ReactQueryFile----/gims,
  );
  const foundText = helperFunctionsMatch[0];

  const addResultTypeFactories = apiClient.matchAll(
    /\/\/-----PersistorHydrator-----(?<content>[\s\S]*?)\/\/-----\/PersistorHydrator-----/gims,
  );
  let addResultTypeFactoryText = '';
  for (let addResultTypeFactory of addResultTypeFactories) {
    let { content } = addResultTypeFactory.groups;
    addResultTypeFactoryText = addResultTypeFactoryText + content + '\n';
    apiClient = apiClient.replace(addResultTypeFactory[0], ``);
  }
  apiClient = apiClient.replace(
    '/*--addResultTypeFactory-placeholder--*/',
    addResultTypeFactoryText,
  );

  const fileName = join(queryDir, `helpers.ts`);

  writeFileSync(fileName, foundText);
  apiClient = apiClient.replace(foundText, '');
  return apiClient;
}

function postProcessClientContent(
  content,
  outputFileWithoutExtension,
  isQuery,
) {
  if (!content.trim()) return '';
  content = content
    .replaceAll(
      ` from '../client';`,
      isMinimal
        ? ` from '../${outputFileWithoutExtension}.types';`
        : ` from '../${outputFileWithoutExtension}';`,
    )
    .replaceAll('this.baseUrl +', 'getBaseUrl() +')
    .replaceAll('this.jsonParseReviver', 'getJsonParseReviver()')
    .replaceAll(
      /Types\.\{ \[key: ((string)|(number))]: /g,
      '{ [key: $1]: Types.',
    )
    .replaceAll('Types.{', '{')
    .replaceAll(/Types.string(?![a-zA-Z0-9_])/g, 'string')
    .replaceAll(/Types.number(?![a-zA-Z0-9_])/g, 'number')
    .replaceAll(/Types.boolean(?![a-zA-Z0-9_])/g, 'boolean')
    .replaceAll(/Types\.Date(?![a-zA-Z0-9_])/g, 'Date')
    .replaceAll(/Types.void(?![a-zA-Z0-9_])/g, 'void')
    .replaceAll(/Types.unknown(?![a-zA-Z0-9_])/g, 'unknown')
    .replaceAll(/Types.any(?![a-zA-Z0-9_])/g, 'any')
    .replaceAll(/Types.Record(?![a-zA-Z0-9_])/g, 'Record')
    .replaceAll('formatDate(', 'Types.formatDate(')
    .replaceAll(/([a-zA-Z0-9_]*?)\.fromJS\(/g, 'Types.$1.fromJS(')
    // this is for correctly handling HTTP actions returning Dictionary<string, MyClass>.
    // it should correctly include the `Types.` prefix.
    // E.g.: (<any>result200)![key] = resultData200[key] ? Types.MyClass.fromJS(resultData200[key]) : new Types.MyClass();
    .replaceAll(
      /Types\.([a-zA-Z0-9_]*?)\.fromJS\(resultData200\[key\]\) : new /g,
      'Types.$1.fromJS(resultData200[key]) : new Types.',
    );

  // we can't `import type * as Types`, because even in *Query files we use e.g. `Types.formatDate`
  const additionalImport = extractTypes
    ? `import * as Types from '../${outputFileWithoutExtension}.types';\n`
    : `import * as Types from '../${outputFileWithoutExtension}';\n`;
  content = content.replace('import', additionalImport + 'import').trim();

  return content;
}

function processForMinimalApi(apiClient) {
  const split = apiClient.split('//-----/CustomTypes.File-----');
  if (split[1].includes('AxiosError')) {
    split[1] = "import type { AxiosError } from 'axios'" + split[1];
  }
  apiClient =
    split[0]
      .replaceAll(/this\./gim, '_data.')
      .replaceAll(/implements \S+/gim, '') + split[1];

  // remove empty clauses like:
  // if (_data["errors"]) {
  //   for (let key in _data["errors"]) {
  //   }
  // }
  apiClient = apiClient.replaceAll(
    /if \(_data\["\S+"\]\) \{\s+for \(let key in _data\["\S+"\]\) \{\s+\}\s+\}/gim,
    '',
  );

  // remove empty lines if line only contain spaces
  apiClient = apiClient.replaceAll(/\r\n\s+\r\n/gim, '\r\n');
  apiClient = apiClient.replaceAll(/\n\s+\n/gim, '\r\n');

  // remove empty blocks like that:
  // if (_data) {
  // }
  apiClient = apiClient.replaceAll(/if \(_data\) \{\s+\}\r?\n?/gim, '');

  return apiClient;
}

function copyFromOriginalOrModules(
  pathToTemplates,
  isClientsAsModules,
  sourceFileName,
  destinationFileName,
) {
  destinationFileName = destinationFileName ?? sourceFileName;
  copyFileSync(
    join(
      pathToTemplates,
      isClientsAsModules ? 'modules' : 'original',
      fileName,
    ),
    join(pathToTemplates, destinationFileName),
  );
}

function patchTemplateFile(pathToTemplates, file, postProcess) {
  const fullFilePath = join(pathToTemplates, file);
  let content = fs.readFileSync(fullFilePath).toString();
  content = postProcess(content);
  fs.writeFileSync(fullFilePath, content);
}
