function NoticiasDAO(connectionBD){

    this._connectionBD = connectionBD; //O _ (underline) serve como convenção para que indicar que a variavel faz parte da classe, com isso elimina redundancia da connectionBD
  
}


NoticiasDAO.prototype.getNoticias = function(callback){
    this._connectionBD.query('select *from noticias', callback);
}

NoticiasDAO.prototype.getNoticia = function(callback){
    this._connectionBD.query('select *from noticias', callback);
}

NoticiasDAO.prototype.salvarNoticia = function(noticia, callback){
    console.log(noticia);
    this._connectionBD.query('INSERT INTO noticias set ? ', noticia, callback);
}


NoticiasDAO.prototype.get5UltimasNoticias = function(callback){
    this._connectionBD.query('Select *From noticias order by data_criacao desc limit 5', callback);
}

module.exports = function(){
    return NoticiasDAO;
}