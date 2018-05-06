module.exports = function(){

    this.getNoticias= function(connectionBD, callback){
        connectionBD.query('select *from noticias', callback);
    }



    this.getNoticia = function(connectionBD, callback){
        connectionBD.query('select *from noticias where id_noticias = 2', callback);
    }

    return this;
}