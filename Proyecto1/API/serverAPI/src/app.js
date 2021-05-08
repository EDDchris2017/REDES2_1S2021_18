var messages = require('./proyecto1_pb');
var services = require('./proyecto1_grpc_pb');
const { v4: uuidv4 } = require('uuid');

var grpc = require('@grpc/grpc-js');
// Base de Datos
const { dbConnection } = require('./db/config');
dbConnection();
// Modulos de Datos
const Reporte = require("./models/reporte.model");
// Modulo de S3
const {listarBuckets} = require("./imagenes/configs3");
listarBuckets()


//Variables
var SERVER_PORT = process.env.SERVER_PORT
var SERVER_ID   = process.env.SERVER_ID


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
async function CrearReporte(call, callback){
    console.log("Insertando nuevo reporte")
    let id_r   = uuidv4(); 
    let carnet = call.request.getCarnet();
    let nombre = call.request.getNombre();
    let curso  = call.request.getCurso();
    let cuerpo = call.request.getCuerpo();
    let fecha  = new Date().toISOString()
    
    try{
        // Creando nuevo reporte
        const nuevoReporte = new Reporte( {id_r,carnet,nombre,curso,cuerpo,fecha} )
        // Guardar reporte en BD
        await nuevoReporte.save();
        // Enviar respuesta por GRPC
        var res_grpc = new messages.ReporteRecibido();
        res_grpc.setMsg("Reporte insertado con exito")
        res_grpc.setCarnet(carnet)
        res_grpc.setNombre(nombre)
        res_grpc.setCurso(curso)
        res_grpc.setCuerpo(cuerpo)
        res_grpc.setFecha(fecha)
        res_grpc.setServidor(SERVER_ID)
        callback(null, res_grpc);
    }catch(error){
        console.log("Error al crear nuevo reporte")
        console.log(error)
    }
}

async function ListarReportes(call, callback){
    console.log("Listando reportes")
    let carnet = call.request.getCarnet()
    //Obtener listado de DB
    let dbReporte = (carnet === 1) ? await Reporte.find({ carnet: carnet}).exec()
                :  await Reporte.find({ }).exec()
    
    // Agregar Campos de servidor
    let res_array = []
    dbReporte.forEach(e => {
        var res_grpc = new messages.ReporteRecibido();
        res_grpc.setMsg("")
        res_grpc.setCarnet(e.carnet)
        res_grpc.setNombre(e.nombre)
        res_grpc.setCurso(e.curso)
        res_grpc.setCuerpo(e.cuerpo)
        res_grpc.setFecha(e.fecha)
        res_grpc.setServidor(process.env.SERVER_ID)

        res_array.push(res_grpc)
    });
    // Enviar Respuesta en  GRPC
    let data = 0
    data = res_array
    res_grpc = new messages.ListaReportes()
    res_grpc.setListaList(data)
    callback(null, res_grpc);
}

/**
 * Starts an RPC server that receives requests for the Greeter service at the
 * sample server port
 */
function main() {
    var server = new grpc.Server();
    server.addService(services.proyecto1Service, {status: Status,crearReporte: CrearReporte, listarReportes: ListarReportes});
    server.bindAsync('0.0.0.0:' + SERVER_PORT, grpc.ServerCredentials.createInsecure(), () => {
		console.log("Iniciando Servidor " + SERVER_ID + " GRPC" )
		console.log("PUERTO: " + SERVER_PORT)
      	server.start();
    });
}
  
main();