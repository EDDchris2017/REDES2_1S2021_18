/**
 * CLIENTE GRPC API
 */

var messages = require('../proto/proyecto1_pb');
var services = require('../proto/proyecto1_grpc_pb');

var grpc = require('@grpc/grpc-js');

function main() {

	var target = 'localhost:5000';
  	var client = new services.proyecto1Client(target,
                                          grpc.credentials.createInsecure());
 	var request = new messages.StatusReq();
  
	// procesar data
	mensaje = "Servidor GRP activo !!!"

	request.setMensaje(mensaje); 
  	client.status(request, function(err, response) {
    	console.log('El Servidor dijo:', response.getMensaje());
  	});
}

main();