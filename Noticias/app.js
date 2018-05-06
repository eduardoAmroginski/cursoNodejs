

var app = require("./config/server"); //Chama a configuração do server que encontra-se em na pasta config


// COM A ADIÇÃO DO CONSIG, as rotas não precisam ser 
//declaradas da forma como é mostrada abaixo. //////

/*var rotaHome = require("./app/routes/home.js"); //Pode ser assim, 
rotaHome(app); /// ou de forma simplificada


var rotaFormNoticias = require("./app/routes/formulario_inclusao_noticia.js")(app); //forma simplificada, assim


var rotaNoticias = require("./app/routes/noticias.js");
rotaNoticias(app);
*/


app.listen(3000, function(){
    console.log("Servidor Ativo!");
});