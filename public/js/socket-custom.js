let socket = io();

// .on, sirve para escuchar información o sucesos
// Detectar cuando nos conectamos al servidor
socket.on('connect', function () {
    console.log('Conectado al servidor');
});

// Detectar cuando nos desconectamos del servidor
socket.on('disconnect', function () {
    console.log('Perdimos conexión con el servidor');
});

// .emit, son para enviar información (al back end) (Enviar mensajes de forma privada al servidor)
// 'sin caracteres especiales ni espacios'
// socket.emit('enviarMensaje', {
//     usuario: 'Jos',
//     mensaje: 'Hola Mundo'
// });

// Enviar información con respuesta inmediata de si llegó el mensaje (evento, objeto, callback)
socket.emit('enviarMensaje', {
    usuario: 'Jos',
    mensaje: 'Hola Mundo'
}, function(respuesta){
    console.log('Respuesta desde el servidor: ', respuesta);
});

// Escuchar información
socket.on('enviarMensaje', function (mensaje) {
    console.log('Servidor: ', mensaje);
});