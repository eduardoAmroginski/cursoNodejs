function NoticiaDAO(connectionBD){

    this._connectionBD = connectionBD; //O _ (underline) serve como convenção para que indicar que a variavel faz parte da classe, com isso elimina redundancia da connectionBD
  
}


NoticiaDAO.prototype.getNoticias = function(callback){
    this._connectionBD.query('select *from noticias', callback);
}

NoticiaDAO.prototype.getNoticia = function(callback){
    this._connectionBD.query('select *from noticias', callback);
}

NoticiaDAO.prototype.salvarNoticia = function(noticia, callback){
    console.log(noticia);
    this._connectionBD.query('INSERT INTO noticias set ? ', noticia, callback);
}


module.exports = function(){
    return NoticiaDAO;
}