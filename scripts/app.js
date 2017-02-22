#!/usr/bin/env node
var express = require('express');
var path = require('path');

var app = express();
app.get('/', function(pet, res){
  res.sendfile(__dirname + '../gh-pages/index.html');
});

app.use(express.static(path.resolve('gh-pages')));

app.listen(8080);

console.log("Servidor Express escuchando en modo %s", app.settings.env + " por el puerto: 8080");
