#!/usr/bin/env node
'use strict';
const { execSync } = require('child_process');

const args = process.argv.splice(2).join(' ');
const pathToTemplates = process.argv[1]
  .replace('cli.js', 'templates')
  .replace('.bin/react-query-swagger', 'react-query-swagger/templates');
const isYarn = process.env.npm_execpath.includes('yarn');

const toExecute = `${
  isYarn ? 'yarn' : 'npm run'
} nswag openapi2tsclient /templateDirectory:${pathToTemplates} ${args}`;
const result = execSync(toExecute);
if (result.error) {
  console.error(result.error);
} else {
  console.log(result.stdout);
}
