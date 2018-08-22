module.exports.iniciaChat = function(application, req, res){

    var dadosForm = req.body;

    
    req.assert('apelido','Nome ou Apelido é Obrigatório').notEmpty();
    req.assert('apelido','Nome ou Apelido tem que ter entre 3 e 15 caracteres').len(3,15);
   
   var erros = req.validationErrors();
   
   if(erros){
       res.render("index", {validacao: erros});
       return; /*não há necessidade do return*/
       
      
   }
   
   application.get('io').emit(
       'msgParaCliente', 
       {apelido: dadosForm.apelido, mensagem: 'Acabou de conectar'});
   
    res.render('chat', {dadosForm : dadosForm});

};