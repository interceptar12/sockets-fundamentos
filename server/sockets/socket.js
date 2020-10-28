// Importando io
const {io} = require('../server');

// Detectar cuando un usuario se conecta al servidor
io.on('connection', (client) => {
    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicación'
    });

    // Detectar cuando el usuario se desconecta del servidor
    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    // Escuchar al Cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        // Broadcast a usuarios (Enviar el mensaje que envio el usuario a todos)
        client.broadcast.emit('enviarMensaje', data);


        // Si viene el atributo usuario
        // if (mensaje.usuario) {
        //     callback({
        //         respuesta: 'TODO SALIÓ BIEN'
        //     });
        // } else {
        //     callback({
        //         respuesta: 'TODO SALIÓ MAL!!!'
        //     });
        // }
    });
});

