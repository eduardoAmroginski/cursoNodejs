module.exports = function(){

    this.getNoticias= function(connectionBD, callback){
        connectionBD.query('select *from noticias', callback);
    }



    this.getNoticia = function(connectionBD, callback){
        connectionBD.query('select *from noticias', callback);
    }


    this.salvarNoticia = function(noticia, connectionBD, callback){
        connectionBD.query('INSERT INTO noticias set ? ', noticia, callback);
    }

    return this;
}