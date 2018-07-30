
module.exports = function(application){ //exporta a função que direciona o requerimento da home

    application.get('/', function(req, resp){
        application.app.controllers.home.index(application, req, resp);
    });

}


