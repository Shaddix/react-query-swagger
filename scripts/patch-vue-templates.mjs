import fs from 'fs';

await postProcess('ReactQuery.liquid', (content) => {
  return content.replace(
    `Types.{{ parameter.Type }}{{ parameter.TypePostfix }}`,
    `Types.{{ parameter.Type }}{{ parameter.TypePostfix }} | Ref<Types.{{ parameter.Type }}{{ parameter.TypePostfix }}>`,
  );
});

async function postProcess(file, postProcess) {
  let content = fs.readFileSync(`src/templates_vue/${file}`, 'utf8').toString();
  content = postProcess(content);

  fs.writeFileSync(`src/templates_vue/${file}`, content);
}
