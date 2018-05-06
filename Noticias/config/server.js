///SEÇÃO 4, AULA 19


//USANDO EXPRESS
var express = require('express');

var consign = require('consign');

var app = express();

//USANDO EJS
app.set('view engine', 'ejs');

app.set('views', './app/views');


consign().include('./app/routes').into(app);

consign()
.include('./app/routes')
.then('config/dbConnection.js') //AQUI DEVE-SE APONTAR A EXTENSÃO PARA NÃO CONFUNDIR O CONSIGN
.then('app/models')
.into(app);



module.exports = app;