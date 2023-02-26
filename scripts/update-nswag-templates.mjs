import fs from 'fs';
import fetch from 'node-fetch';

await downloadAndPostProcess(
  'File.liquid',
  (content) =>
    content.replace(
      /\{\{ Types \}\}/,
      '//-----Types.File-----\n{{ Types }}\n//-----/Types.File-----',
    ),
  '_File.liquid',
);
await downloadAndPostProcess('AxiosClient.liquid', (content) => content);
await downloadAndPostProcess('FetchClient.liquid', (content) => content);

await downloadAndPostProcess(
  'Client.ProcessResponse.HandleStatusCode.liquid',
  (content) =>
    content.replaceAll(
      '{{ operation.ResultType }}',
      `{{ operation.ResultType | prepend: 'Types.'  }}`,
    ),
);
await downloadAndPostProcess(
  'Client.ProcessResponse.Return.liquid',
  (content) =>
    content.replaceAll(
      '{{ operation.ResultType }}',
      `{{ operation.ResultType | prepend: 'Types.'  }}`,
    ),
);
await downloadAndPostProcess('Client.RequestBody.liquid', (content) =>
  content
    .replace(
      '{%-             if parameter.IsDateOrDateTimeArray -%}',
      `{%-             if parameter.IsDateArray -%}
    {{ parameter.VariableName }} && {{ parameter.VariableName }}.forEach(item_ => { content_ += encodeURIComponent("{{ parameter.Name }}") + "=" + encodeURIComponent(item_ ? "" + formatDate(item_) : "null") + "&"; });
{%-             elsif parameter.IsDateOrDateTimeArray -%}`,
    )
    .replace(
      '{%-             elsif parameter.IsDateOrDateTime -%}',
      `{%-             elsif parameter.IsDate -%}
    content_ += encodeURIComponent("{{ parameter.Name }}") + "=" + encodeURIComponent({{ parameter.VariableName }} ? "" + formatDate({{ parameter.VariableName }}) : "{{ QueryNullValue }}") + "&";
{%-             elsif parameter.IsDateOrDateTime-%}`,
    )
    .replace(
      '{%-             elsif parameter.IsDateOrDateTime -%}',
      `{%-             elsif parameter.IsDate -%}
    content_.append("{{ parameter.Name }}", formatDate({{ parameter.VariableName }}));
{%-             elsif parameter.IsDateOrDateTime-%}`,
    ),
);

async function downloadAndPostProcess(file, postProcess, newName) {
  let content = await fetch(
    `https://raw.githubusercontent.com/RicoSuter/NSwag/master/src/NSwag.CodeGeneration.TypeScript/Templates/${file}`,
  ).then((x) => x.text());

  const processedContent = postProcess(content);
  if (newName) {
    fs.writeFileSync(`src/templates/${newName}`, processedContent);
  } else {
    const originalFileName = `src/templates/original/${file}`;
    const previousOriginalContent = fs.readFileSync(originalFileName);
    if (previousOriginalContent != content) {
      fs.writeFileSync(originalFileName, content);
      fs.writeFileSync(`src/templates/modules/${file}`, processedContent);
    }
  }
}
