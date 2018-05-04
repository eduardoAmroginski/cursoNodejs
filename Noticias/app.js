//Seção 3, aula 13

//USANDO EXPRESS
var express = require('express');
var msg = require('./moduloteste');

var app = express();

//Seção 3, aula 14
//USANDO EJS
app.set('view engine', 'ejs');

app.get('/formulario_inclusao_noticias', function(req, resp){
    resp.render("admin/form_add_noticia");
});

app.get('/noticias', function(req, resp){
    resp.render("noticias/noticias");
});

app.get('/', function(req, resp){
    resp.render("home/index");
});



app.listen(3000, function(){
    console.log(msg());
});