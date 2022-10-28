import fs from 'fs';
import fetch from 'node-fetch';

const fileLiquid = await fetch(
  'https://raw.githubusercontent.com/RicoSuter/NSwag/master/src/NSwag.CodeGeneration.TypeScript/Templates/File.liquid',
).then((x) => x.text());
fs.writeFileSync('src/templates/_File.liquid', fileLiquid);

await downloadAndPostProcess('AxiosClient.liquid', (content) => content);
await downloadAndPostProcess('FetchClient.liquid', (content) => content);

await downloadAndPostProcess('Client.ProcessResponse.HandleStatusCode.liquid', (content) => content.replaceAll('{{ operation.ResultType }}', `{{ operation.ResultType | prepend: 'Types.'  }}`))
await downloadAndPostProcess('Client.ProcessResponse.Return.liquid', (content) => content.replaceAll('{{ operation.ResultType }}', `{{ operation.ResultType | prepend: 'Types.'  }}`))

async function downloadAndPostProcess(file, postProcess) {
  let content = await fetch(
    `https://raw.githubusercontent.com/RicoSuter/NSwag/master/src/NSwag.CodeGeneration.TypeScript/Templates/${file}`,
  ).then((x) => x.text());
   const previousOriginalContent = fs.readFileSync(`src/templates/original/${file}`);
   if (previousOriginalContent != content) {
    fs.writeFileSync(`src/templates/original/${file}`, content);  
    content = postProcess(content)
    fs.writeFileSync(`src/templates/modules/${file}`, content);  
   }  
}