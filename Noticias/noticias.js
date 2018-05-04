/*//--------- Seção 2, Aula 7 ----------------

console.log("Criando um site de noticias com NodeJS");
*/

/*//--------- Seção 2, Aula 8 ----------------
var http = require('http');


var server = http.createServer(function(req, resp){

    resp.end("<html><body>Portal de Noticias</body></html>");

});

server.listen(4000); */

//--------- Seção 2, Aula 9 ----------------

var http = require('http');


var server = http.createServer(function(req, resp){
    
    var categoria = req.url;

    if(categoria == "/tecnologia"){
        resp.end("<html><body>Noticias sobre Tecnologia</body></html>");
    }else if (categoria == "/esportes"){
        resp.end("<html><body>Noticias sobre Esportes</body></html>");
    
    }else if(categoria == "/jogos"){
        resp.end("<html><body>Portal Sobre Jogos</body></html>");
    }else{
        resp.end("<html><body>Portal de Noticias</body></html>");
    }


});

server.listen(4000);