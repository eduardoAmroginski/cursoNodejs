module.exports.index = function(application, req, resp){

    var connectionBD = application.config.dbConnection();

    var noticiasModel = new application.app.models.NoticiasDAO(connectionBD);

    noticiasModel.get5UltimasNoticias(function(error, result){
        console.log(result);
        resp.render("home/index", {noticias : result});
    });

}