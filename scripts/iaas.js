#!/usr/bin/env node
console.log("SSH to iaas.ull");


const sshexec = require('ssh-exec');

function puts(error, stdout, stderr) {
console.log(stdout);
}

var url_repo = require('../package.json').repository.url_ssh;
var name_dir = "Practica2";
sshexec('cd prolen; git clone ${url_repo} ${name_dir}; cd ${name_dir}; npm run build; npm run server-express', puts);
