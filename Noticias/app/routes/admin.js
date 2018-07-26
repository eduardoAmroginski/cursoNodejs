
module.exports = function(application){ //exporta a função que direciona o requerimento formulario_inclusao_noticias

    application.get('/formulario_inclusao_noticias', function(req, resp){ //rota para formulario inclusão noticias
        resp.render("admin/form_add_noticia");
    });



    application.post('/noticias/salvar', function(req, resp){ //rota para salvar formulario
        var noticias = req.body;

        //conexão
        var connection = application.config.dbConnection();

        //model
        var noticiasModel = application.app.models.noticiasModel;

        //salvarNoticia
        noticiasModel.salvarNoticia(noticias, connection, function(error, result){//espera um JSON
            resp.redirect("/noticias"); //redireciona para a pagina noticias
        });

    });

}