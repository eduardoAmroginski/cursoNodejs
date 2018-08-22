/* importar as configurações do servidor */
var app = require('./config/server');

/*parametrizar a porta de escuta */
var server = app.listen(3000, function(){
    console.log('Servidor Online');
});

/*criando gancho entre o socket.io e a porta do server */
var io = require('socket.io').listen(server);

app.set('io', io); /*define o io globalmente no app*/

/*criar a conexão por websocket */
io.on('connection', function(socket){
    console.log('Usuario conectou')

    socket.on('disconnect', function(){
        console.log('Usuario desconectou');
    });

    socket.on('msgParaServidor', function(data){

        /*eventos de dialogo*/
        socket.emit(
            'msgParaCliente', 
            {apelido: data.apelido, mensagem: data.mensagem}
        );

        socket.broadcast.emit(
            'msgParaCliente', 
            {apelido: data.apelido, mensagem: data.mensagem}
        );

        /*eventos de participantes */
        if(parseInt(data.apelido_atualizado_nos_clientes) == 0){

            socket.emit(
                'participantesParaCliente', 
                {apelido: data.apelido}
            );
    
            socket.broadcast.emit(
                'participantesParaCliente', 
                {apelido: data.apelido}
            );

        }
        
    });


});