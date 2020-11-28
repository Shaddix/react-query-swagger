#!/usr/bin/env node
'use strict';
const { exec } = require('child_process');
const args = process.argv.splice(2).join(' ');
const pathToTemplates = process.argv[1].replace('cli.js', 'templates');
const isYarn = process.env.npm_execpath.includes('yarn');
const toExecute = `${isYarn ? 'yarn' : 'npm run'} nswag openapi2tsclient /templateDirectory:${pathToTemplates} ${args}`
exec(toExecute);
