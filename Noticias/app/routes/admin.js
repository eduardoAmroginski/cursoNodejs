
module.exports = function(application){ //exporta a função que direciona o requerimento formulario_inclusao_noticias

    application.get('/formulario_inclusao_noticias', function(req, resp){ //rota para formulario inclusão noticias
        resp.render("admin/form_add_noticia");
    });



    application.post('/noticias/salvar', function(req, resp){ //rota para salvar formulario
        var noticias = req.body;

        console.log(noticias);
        req.assert('titulo','Titulo é obrigatorio').notEmpty();
        req.assert('resumo','Resumo é obrigatorio').notEmpty();
        req.assert('resumo','Resumo só pode ter entre 10 e 100 caracteres').len(10, 100);
        req.assert('autor','Autor é obrigatorio').notEmpty();
        req.assert('dataNoticia','Data é obrigatoria').notEmpty();
        req.assert('noticia','A Noticia é obrigatorio').notEmpty();


        var erros = req.validationErrors();

        console.log(erros)

        if(erros){
            resp.render("admin/form_add_noticia", {validacao : erros});
            return;
        }

        //conexão
        var connection = application.config.dbConnection();

        //model
        var noticiasModel = new application.app.models.NoticiasDAO(connection);

        //salvarNoticia
        noticiasModel.salvarNoticia(noticias, function(error, result){//espera um JSON
            resp.redirect("/noticias"); //redireciona para a pagina noticias
        });

    });

}