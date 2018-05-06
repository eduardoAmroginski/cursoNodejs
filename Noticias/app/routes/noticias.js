
var dbConnection = require("../../config/dbConnection"); ///Traz o modulo da conexão com o banco de dados que se encontra em config

module.exports = function(app){

    var connectionBD = dbConnection(); //Atribui a chamada do dbConnection ao ConectionBD, fazendo a conexão do banco de dados
    app.get('/noticias', function(req, resp){

        connectionBD.query("select *from noticias", function(err, result){
            resp.render("noticias/noticias",{noticias : result}); //Faz a renderização dos dados atraves da view noticias.ejs
        });
    });
};