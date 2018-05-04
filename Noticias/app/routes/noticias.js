module.exports = function(app){

    app.get('/noticias', function(req, resp){

        var mysql = require('mysql'); //chama o banco de dados mysql

        var connectionBD = mysql.createConnection({ //faz a conexão com o banco de dados
            host: 'localhost',
            user: 'root',
            password: '12345',
            database: 'portal_noticias'
        });

        connectionBD.query("select *from noticias", function(err, result){
            resp.send(result);
        });
       // resp.render("noticias/noticias");
    });
};