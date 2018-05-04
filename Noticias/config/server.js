///SEÇÃO 4, AULA 19


//USANDO EXPRESS
var express = require('express');

var app = express();

//USANDO EJS
app.set('view engine', 'ejs');

app.set('views', './app/views');

module.exports = app;