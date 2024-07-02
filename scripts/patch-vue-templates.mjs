import fs from 'fs';

const args = process.argv.slice(2);
const folder = args[0];

await postProcess('AxiosClient.liquid', (content) => {
  return content.replace('{%- template PersistorHydrator -%}', '');
});

await postProcess('File.liquid', (content) => {
  return content
    .replace('//-----PersistorHydrator.File-----', '')
    .replace('{% template PersistorHydrator.File %}', '')
    .replace('//-----/PersistorHydrator.File----', '');
});

await postProcess('ReactQuery.liquid', (content) => {
  content = content
    .replace(
      `Types.{{ parameter.Type }}{{ parameter.TypePostfix }}`,
      `MaybeRef<Types.{{ parameter.Type }}{{ parameter.TypePostfix }}>`,
    )
    .replace(
      /(?<=MutationKey.*)\{\{ ParameterType \}\}\{\{ parameter\.TypePostfix \}\}/,
      'MaybeRef<{{ ParameterType }}{{ parameter.TypePostfix }}>',
    )
    .replace(
      /(?<=export function.*use.*Mutation.*)\{\{ ParameterType \}\}\{\{ parameter\.TypePostfix \}\}/,
      'MaybeRef<{{ ParameterType }}{{ parameter.TypePostfix }}>',
    )
    .replace(
      /(?<=export function.*use.*Query.*)\{\{ ParameterType \}\}\{\{ parameter\.TypePostfix \}\}/,
      'MaybeRef<{{ ParameterType }}{{ parameter.TypePostfix }}>',
    )
    .replaceAll(
      'mutationFn: (data: {{ TVariableTypeWithParameters }})',
      'mutationFn: (data: NoRefObject<{{ TVariableTypeWithParameters }}>)',
    )
    .replace(
      'UseMutationOptions<{{ ResultType }}, unknown, {{ TVariableTypeWithParameters }}, TContext>',
      'UseMutationOptions<{{ ResultType }}, unknown, NoRefObject<{{ TVariableTypeWithParameters }}>, TContext>',
    )
    .replace(
      'UseMutationResult<{{ ResultType }}, unknown, {{ TVariableTypeWithParameters }}, TContext>',
      'UseMutationResult<{{ ResultType }}, unknown, NoRefObject<{{ TVariableTypeWithParameters }}>, TContext>',
    )
    .replaceAll(
      /(?<=mutationFn:.*)\{%- assign ParameterType = parameter.Type -%\}\{\{ parameter.VariableName \}\}\{% unless forloop.last %\}/g,
      '{%- assign ParameterType = parameter.Type -%}{{ parameter.VariableName }} as any{% unless forloop.last %}',
    )
    .replaceAll(
      '{%- if isForm %}{{TVariableName}}.{{parameter.VariableName}}{% else %}{{ parameter.VariableName }}{% endif %}',
      '{%- if isForm %}{{TVariableName}}.{{parameter.VariableName}} as any{% else %}{{ parameter.VariableName }} as any{% endif %}',
    )
    .replaceAll(
      'options?.parameters?.{{ parameter.VariableName }}!',
      'options?.parameters?.{{ parameter.VariableName }}! as any',
    )
    .replace(
      " & Partial<Pick<UseQueryOptions<{{ ResultType }}, unknown, {{ ResultType }}>, 'queryFn'>>",
      '',
    );

  return content;
});

async function postProcess(file, postProcess) {
  let content = fs.readFileSync(`src/${folder}/${file}`, 'utf8').toString();
  content = postProcess(content);

  fs.writeFileSync(`src/${folder}/${file}`, content);
}
