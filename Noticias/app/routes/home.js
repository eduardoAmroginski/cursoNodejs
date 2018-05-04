
module.exports = function(app){ //exporta a função que direciona o requerimento da home

    app.get('/', function(req, resp){
        resp.render("home/index"); 
    });

}


