/**
 * CLIENTE GRPC API
 */

var messages = require('../proto/proyecto1_pb');
var services = require('../proto/proyecto1_grpc_pb');
var grpc = require('@grpc/grpc-js');

// ========================== CONFIGURACION DEl CLIENT API =====================
var IP_SERVER 	= "localhost"
var PORT_SERVER = "5000" 
var client = undefined

function main() {
	let target = IP_SERVER + ":" + PORT_SERVER;
	client = new services.proyecto1Client(target,
		grpc.credentials.createInsecure());
}

main()

// ========================== WEB SERVICES DISPONIBLES =========================
function status(mensaje,callback) {

 	var request = new messages.StatusReq();

	request.setMensaje(mensaje); 
  	client.status(request, function(err, response) {
		console.log('El Servidor dijo:', response.getMensaje());
		callback(response)
  	});
}

function crearReporte(mensaje, callback){

}

function listarReportes(me, callback){

}

function verReporte(me, callback){

}

module.exports = 
{
	status:status,
	crearReporte: crearReporte,
	listarReportes: listarReportes,
	verReporte: verReporte
}
