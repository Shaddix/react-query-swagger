import fs from 'fs';
import fetch from 'node-fetch';

const fileLiquid = await fetch(
  'https://raw.githubusercontent.com/RicoSuter/NSwag/master/src/NSwag.CodeGeneration.TypeScript/Templates/File.liquid',
).then((x) => x.text());
fs.writeFileSync('src/templates/_File.liquid', fileLiquid);

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

// content_.append;

async function downloadAndPostProcess(file, postProcess) {
  let content = await fetch(
    `https://raw.githubusercontent.com/RicoSuter/NSwag/master/src/NSwag.CodeGeneration.TypeScript/Templates/${file}`,
  ).then((x) => x.text());
  const previousOriginalContent = fs.readFileSync(
    `src/templates/original/${file}`,
  );
  if (previousOriginalContent != content) {
    fs.writeFileSync(`src/templates/original/${file}`, content);
    content = postProcess(content);
    fs.writeFileSync(`src/templates/modules/${file}`, content);
  }
}
