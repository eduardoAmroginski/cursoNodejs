
//var dbConnection = require("../../config/dbConnection"); ///Traz o modulo da conexão com o banco de dados que se encontra em config

module.exports = function(application){
    
    
    
    application.get('/noticias', function(req, resp){

       application.app.controllers.noticias.noticias(application, req, resp);

    });


    application.get('/noticia', function(req, resp){
        
        application.app.controllers.noticias.noticia(application, req, resp);

    });

};