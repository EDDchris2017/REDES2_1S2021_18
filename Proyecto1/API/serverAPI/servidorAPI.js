var messages = require('../proto/proyecto1_pb');
var services = require('../proto/proyecto1_grpc_pb');

var grpc = require('@grpc/grpc-js');

//Variables
var SERVER_PORT = 5000


/**
 * Servicio de Status
 */
function Status(call, callback) {
    var statusObj = new messages.StatusRes();
    statusObj.setMensaje(call.request.getMensaje() + " desde Server GRPC");
    callback(null, statusObj);
}

/**
 * Starts an RPC server that receives requests for the Greeter service at the
 * sample server port
 */
function main() {
    var server = new grpc.Server();
    server.addService(services.proyecto1Service, {status: Status,CrearReporte: undefined, ListarReportes: undefined});
    server.bindAsync('0.0.0.0:' + SERVER_PORT, grpc.ServerCredentials.createInsecure(), () => {
		console.log("Iniciando Servidor GRPC")
		console.log("PUERTO: " + SERVER_PORT)
      	server.start();
    });
}
  
main();