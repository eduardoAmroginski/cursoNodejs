module.exports = function(){

    this.getNoticias= function(connectionBD, callback){
        connectionBD.query('select *from noticias', callback);
    }



    this.getNoticia = function(connectionBD, callback){
        connectionBD.query('select *from noticias where id_noticia = 2', callback);
    }

    return this;
}