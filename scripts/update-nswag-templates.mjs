import fs from 'fs';
import fetch from 'node-fetch';

const originalAxiosClient = fs.readFileSync('src/templates/original/AxiosClient.liquid');
const axiosClientLiquid = await fetch(
  'https://raw.githubusercontent.com/RicoSuter/NSwag/master/src/NSwag.CodeGeneration.TypeScript/Templates/AxiosClient.liquid',
).then((x) => x.text());
if (originalAxiosClient != axiosClientLiquid) {
  // if file was updated in NSwag, we should update our copy as well
  fs.writeFileSync('src/templates/modules/AxiosClient.liquid', axiosClientLiquid);
}
fs.writeFileSync('src/templates/original/AxiosClient.liquid', axiosClientLiquid);

const originalFetchClient = fs.readFileSync('src/templates/original/FetchClient.liquid');
const fetchClientLiquid = await fetch(
  'https://raw.githubusercontent.com/RicoSuter/NSwag/master/src/NSwag.CodeGeneration.TypeScript/Templates/FetchClient.liquid',
).then((x) => x.text());
if (originalFetchClient != fetchClientLiquid) {
  // if file was updated in NSwag, we should update our copy as well
  fs.writeFileSync('src/templates/modules/FetchClient.liquid', fetchClientLiquid);
}
fs.writeFileSync('src/templates/original/FetchClient.liquid', fetchClientLiquid);

const fileLiquid = await fetch(
  'https://raw.githubusercontent.com/RicoSuter/NSwag/master/src/NSwag.CodeGeneration.TypeScript/Templates/File.liquid',
).then((x) => x.text());
fs.writeFileSync('src/templates/_File.liquid', fileLiquid);

let clientProcessResponseHandleStatusLiquid = await fetch(
  'https://raw.githubusercontent.com/RicoSuter/NSwag/master/src/NSwag.CodeGeneration.TypeScript/Templates/Client.ProcessResponse.HandleStatusCode.liquid',
).then((x) => x.text());
clientProcessResponseHandleStatusLiquid = clientProcessResponseHandleStatusLiquid.replaceAll('{{ operation.ResultType }}', `{{ operation.ResultType | prepend: 'Types.'  }}`);
fs.writeFileSync('src/templates/Client.ProcessResponse.HandleStatusCode.liquid', clientProcessResponseHandleStatusLiquid);

let clientProcessResponseReturnLiquid = await fetch(
  'https://raw.githubusercontent.com/RicoSuter/NSwag/master/src/NSwag.CodeGeneration.TypeScript/Templates/Client.ProcessResponse.Return.liquid',
).then((x) => x.text());
clientProcessResponseReturnLiquid = clientProcessResponseReturnLiquid.replaceAll('{{ operation.ResultType }}', `{{ operation.ResultType | prepend: 'Types.'  }}`);
fs.writeFileSync('src/templates/Client.ProcessResponse.Return.liquid', clientProcessResponseReturnLiquid);
