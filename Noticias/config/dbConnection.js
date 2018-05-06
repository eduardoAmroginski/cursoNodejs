var mysql = require('mysql'); //chama o banco de dados mysql

module.exports = function(){

    return mysql.createConnection({ //faz a conexão com o banco de dados
        host: 'localhost',
        user: 'root',
        password: '12345',
        database: 'portal_noticias'
    });


}
