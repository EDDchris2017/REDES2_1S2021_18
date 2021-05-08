/**
 * CLIENTE GRPC API
 */

var messages = require('./proyecto1_pb');
var services = require('./proyecto1_grpc_pb');
var grpc = require('@grpc/grpc-js');

// ========================== CONFIGURACION DEl CLIENT API =====================
var IP_SERVER 	= process.env.IP_SERVER
var PORT_SERVER = process.env.PORT_SERVER 
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

function crearReporte(carnet, nombre, curso, cuerpo, callback){
	var request = new messages.Reporte();
	request.setCarnet(carnet)
	request.setNombre(nombre)
	request.setCurso(curso)
	request.setCuerpo(cuerpo)
	client.crearReporte(request, function(err, response) {
		console.log("Respuesta de crearReporte GRPC")
		callback(response)
	})
}

function listarReportes(carnet, callback){
	var request = new messages.ParamLista();
	request.setCarnet(carnet)
	client.listarReportes(request, function(err, response){
		callback(response.getListaList())
	})
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
