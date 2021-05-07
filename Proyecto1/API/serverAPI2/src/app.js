var messages = require('./proyecto1_pb');
var services = require('./proyecto1_grpc_pb');

var grpc = require('@grpc/grpc-js');
// Base de Datos
const Reporte = require("./models/reporte.model");

//Variables
var SERVER_PORT = process.env.SERVER_PORT


/**
 * Servicio de Status
 */
function Status(call, callback) {
    var statusObj = new messages.StatusRes();
    statusObj.setMensaje(call.request.getMensaje() + " desde Server GRPC");
    callback(null, statusObj);
}

/**
 * Servicio de Insercicion de Reporte
 */
function CrearReporte(call, callback){
    let carnet = call.request.getCarnet();
    let nombre = call.request.getNombre();
    let curso  = call.request.getCurso();
    let cuerpo = call.request.getCuerpo();
    console.log("Insertando nuevo reporte")
    try{
        // Creando nuevo reporte
        const nuevoReporte = new Reporte( {carnet,nombre,curso,cuerpo} )
        // Guardar reporte en BD
        await nuevoReporte.save();
        // Enviar respuesta por GRPC
        var statusObj = new messages.ReporteRecibido();

    }catch(error){
        console.log("Error al crear nuevo reporte")
        console.log(error)
    }
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