
module.exports = function(app){ //exporta a função que direciona o requerimento formulario_inclusao_noticias

app.get('/formulario_inclusao_noticias', function(req, resp){ //rota para formulario inclusão noticias
    resp.render("admin/form_add_noticia");
});

}