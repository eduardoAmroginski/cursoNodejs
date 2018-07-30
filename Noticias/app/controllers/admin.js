//Os controllers ajudam a diminuir a carga em cima das routes, facilita a visualização de onde um possivel erro de logica de operação está.


module.exports.formulario_inclusao_noticia = function(application, req, resp){
    resp.render("admin/form_add_noticia", {validacao:{}, noticia:{}}); //é necessario declarar o JSON com a variavel validacao para que não haja erro de definicao de variavel

}

module.exports.noticias_salvar = function(application, req, resp){
    var noticias = req.body;

    console.log(noticias);
    req.assert('titulo','Titulo é obrigatorio').notEmpty();
    req.assert('resumo','Resumo é obrigatorio').notEmpty();
    req.assert('resumo','Resumo só pode ter entre 10 e 100 caracteres').len(10, 100);
    req.assert('autor','Autor é obrigatorio').notEmpty();
    req.assert('dataNoticia','Data é obrigatoria').notEmpty();
    req.assert('noticia','A Noticia é obrigatorio').notEmpty();


    var erros = req.validationErrors();

    console.log(erros);

    if(erros){
        console.log(erros);
        resp.render("admin/form_add_noticia", {validacao : erros, noticia: noticias});
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

}