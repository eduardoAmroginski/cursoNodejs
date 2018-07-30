
module.exports = function(application){ //exporta a função que direciona o requerimento formulario_inclusao_noticias

    application.get('/formulario_inclusao_noticia', function(req, resp){ //rota para formulario inclusão noticias
       
        application.app.controllers.admin.formulario_inclusao_noticia(application, req, resp);

    });



    application.post('/noticias/salvar', function(req, resp){ //rota para salvar formulario
        
        application.app.controllers.admin.noticias_salvar(application, req, resp);

    });

}