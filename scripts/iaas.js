#!/usr/bin/env node
console.log("SSH to iaas.ull");
const sshexec = require('ssh-exec');
var exec = require('child_process').exec;

function puts(error, stdout, stderr) {
console.log(stdout);
}

var url_repo = require('../package.json').repository.url_ssh;
var name_dir = "Practica2";
var host = require('../package.json').host.alias;
sshexec('cd primeros-pasos-en-nodejs-erik-jorge-carlos-ruben && git pull', {
  user: 'usuario',
  host: '10.6.128.156'
}).pipe(process.stdout);
// ; cd prolen; git clone ${url_repo} ${name_dir}; cd ${name_dir}; npm run build; npm run server-express
