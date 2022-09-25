import fs from 'fs';
const axiosClientLiquid = await fetch(
  'https://raw.githubusercontent.com/RicoSuter/NSwag/master/src/NSwag.CodeGeneration.TypeScript/Templates/AxiosClient.liquid',
).then((x) => x.text());
fs.writeFileSync('src/templates/_AxiosClient.liquid', axiosClientLiquid);

const fetchClientLiquid = await fetch(
  'https://raw.githubusercontent.com/RicoSuter/NSwag/master/src/NSwag.CodeGeneration.TypeScript/Templates/FetchClient.liquid',
).then((x) => x.text());
fs.writeFileSync('src/templates/_FetchClient.liquid', fetchClientLiquid);

const fileLiquid = await fetch(
  'https://raw.githubusercontent.com/RicoSuter/NSwag/master/src/NSwag.CodeGeneration.TypeScript/Templates/File.liquid',
).then((x) => x.text());
fs.writeFileSync('src/templates/_File.liquid', fileLiquid);
