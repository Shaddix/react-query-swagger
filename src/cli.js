#!/usr/bin/env node
'use strict';
const { execSync } = require('child_process');
const { readFileSync, writeFileSync } = require('fs');
let args = process.argv.splice(2).join(' ');
const isV4 = args.includes('/tanstack');
// this one might be useful if you only want to have
// to initialize Axios and baseUrl from a single place
const noHooks = args.includes('/no-hooks');

let pathToTemplates = process.mainModule.filename
  .replace('cli.js', 'templates')
  .replace('.bin/react-query-swagger', 'react-query-swagger/templates');
if (noHooks) {
  pathToTemplates = pathToTemplates.replace(/templates$/, 'templates_no_hooks');
} else if (!isV4) {
  pathToTemplates = pathToTemplates.replace(/templates$/, 'templates_v3');
}

if (args.includes('/use-recommended-configuration')) {
  // otherwise optional parameters are generated as mandatory
  // E.g.:
  // -true: deletePet(petId: number, api_key?: string | null | undefined)
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
}

const isYarn = process.env.npm_execpath.includes('yarn');
const cliExecutor = isYarn ? 'yarn' : 'npx';
const toExecute = `${cliExecutor} nswag openapi2tsclient /templateDirectory:"${pathToTemplates}" ${args}`;
execSync(toExecute, function (e, stdout, stderr) {
  console.log(stdout);
});

if (args.includes('/fix-null-undefined-serialization')) {
  const outputRegex =
    args.match(/\/output:"(?<path>.*?)"/) ||
    args.match(/\/output:(?<path>\S*)/);
  const outputPath = outputRegex?.groups?.['path'];
  if (!outputPath) {
    throw new Error('Unable to parse "/output" option from command line args');
  }
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
