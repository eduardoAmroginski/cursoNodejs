
//var dbConnection = require("../../config/dbConnection"); ///Traz o modulo da conexão com o banco de dados que se encontra em config

module.exports = function(application){
    
    
    
    application.get('/noticias', function(req, resp){

        var connectionBD = application.config.dbConnection(); //Atribui a chamada do dbConnection ao ConectionBD, fazendo a conexão do banco de dados
        var noticiasModel = new application.app.models.NoticiasDAO(connectionBD);

        noticiasModel.getNoticias(function(err, result){
            resp.render("noticias/noticias",{noticias : result}); //Faz a renderização dos dados atraves da view noticias.ejs
        });

    });


};