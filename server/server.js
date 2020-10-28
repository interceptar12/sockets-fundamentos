const express = require('express');

// Importar la libreria para los Sockets
const socketIO = require('socket.io');

// Servidor por defecto de node
const http = require('http');

const path = require('path');

const app = express();
/*
   Se tienen que hacer unas configuraciones adicionales si queremos trabajar con express y socket.io
   Ya que socket.io trabaja en conjunto con un servidor http que trae por defecto node.js, no de express
*/

/*
   Como express esta basado en http, y el mismo usa muchas funciones similares de http, este se puede 
   mandar como argumento y ya estará montado el servidor con toda la configuración que le hariamos a express
*/
// Definiendo el servidor para correr la aplicación
let server = http.createServer(app);

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

// Inicializar socket.io (Inputs Outputs) (Se exporta para usarlo en socket.js)
module.exports.io = socketIO(server);
// IO = Esta es la comunicación del Backend

// Importando la configuración del los sockets
require('./sockets/socket');

server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${port}`);

});