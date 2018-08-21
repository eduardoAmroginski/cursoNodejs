module.exports.noticias = function(application, req, resp){
    
    var connectionBD = application.config.dbConnection(); //Atribui a chamada do dbConnection ao ConectionBD, fazendo a conexão do banco de dados
    var noticiasModel = new application.app.models.NoticiasDAO(connectionBD);

    noticiasModel.getNoticias(function(error, result){
        resp.render("noticias/noticias",{noticias : result}); //Faz a renderização dos dados atraves da view noticias.ejs
    });

};

module.exports.noticia = function(application, req, resp){
    
    var connectionBD = application.config.dbConnection(); //Atribui a chamada do dbConnection ao ConectionBD, fazendo a conexão do banco de dados
    var noticiasModel = new application.app.models.NoticiasDAO(connectionBD);
    
    var id_noticias = req.query; //atravez da query do req(request) podemos recuperar os para metro passados pela url 

    noticiasModel.getNoticia(id_noticias, function(error, result){
            resp.render("noticias/noticia",{noticia : result}); //Faz a renderização dos dados atraves da view noticias.ejs
        });
   

};