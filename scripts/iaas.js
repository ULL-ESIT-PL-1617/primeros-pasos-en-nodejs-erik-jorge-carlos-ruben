#!/usr/bin/env node
console.log("SSH to iaas.ull");
const sshexec = require('ssh-exec');
var exec = require('child_process').exec;

function puts(error, stdout, stderr) {
console.log(stdout);
}

sshexec('cd primeros-pasos-en-nodejs-erik-jorge-carlos-ruben && git pull && npm run build', {
  user: 'usuario',
  //host: '10.6.128.156'
  host: '10.6.128.119'
}).pipe(process.stdout);
// ; cd prolen; git clone ${url_repo} ${name_dir}; cd ${name_dir}; npm run build; npm run server-express
