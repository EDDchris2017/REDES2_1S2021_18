// Controladores API
const clienteGRPC = require("./clienteGRPC")

// Verificar el Status del Servidor de GRPC
/** 
 * Params BODY
 * -> mensaje
*/
const status = async (req, res) => {
    try
    {
        let {mensaje} = req.body
        clienteGRPC.status(mensaje, function(grpcRes) {
            return res.status(200).json({
                ok: true,
                mensaje: grpcRes.getMensaje()
            })
        })
    }catch(error){
        return res.status(500).json({
            ok: false,
            msg: "Error en Status del Servidor API",
            msg_error: req.body,
            servidor: process.env.ID_API
        })
    }
}

const crearReporte = async (req, res) => {
    console.log("Creando reporte API")
    
    try{
        let {carnet,nombre,curso,cuerpo} = req.body
        clienteGRPC.crearReporte(carnet, nombre, curso, cuerpo, function(grpcRes){
            return res.status(200).json({
                ok: true,
                msg: "Reporte creado",
                carnet: grpcRes.getCarnet(),
                nombre: grpcRes.getNombre(),
                curso:  grpcRes.getCurso(),
                cuerpo: grpcRes.getCuerpo(),
                fecha:  grpcRes.getFecha(),
                servidor: process.env.ID_API + " Servidor: " + grpcRes.getServidor()
            });
    
        })
    }catch(error){
        return res.status(500).json({
            ok: false,
            msg: "Error en Crear Reporte del Servidor API",
            msg_body: req.body,
            servidor: process.env.ID_API
        })
    }
}

const listarReportes = async (req, res) => {
    console.log("Listando reportes API")
    let {carnet} = req.body
    if (!carnet){
        carnet = 0
    }
    clienteGRPC.listarReportes(carnet, function(grpcRes){
        let reportes = []
        grpcRes.forEach(element => {
            let reporte = {
                carnet: element.getCarnet(),
                nombre: element.getNombre(),
                curso: element.getCurso(),
                cuerpo: element.getCuerpo(),
                fecha: element.getFecha(),
                servidor: process.env.ID_API + " Servidor: " + element.getServidor()
            }
            reportes.push(reporte)
        });
        return res.status(200).json(reportes)
    })
}

const verReporte = async (req, res) => {

}

const CrearAsistencia = async (req, res) =>{
    console.log("Creando una nueva asistencia API")
    try
    {
        const {carnet,nombre,nombreEvento,idEvento,extencion,base64} = req.body
        clienteGRPC.crearAsistencia(carnet, nombre, nombreEvento, idEvento
            , extencion, base64, function(grpcRes){
                return res.status(200).json({
                    ok: true,
                    carnet: grpcRes.getCarnet(),
                    nombre: grpcRes.getNombre(),
                    nombreEvento: grpcRes.getNombreevento(),
                    idEvento: grpcRes.getIdevento(),
                    extencion: grpcRes.getExtencion(),
                    base64: grpcRes.getBase64(),
                    fecha: grpcRes.getFecha(),
                    servidor: process.env.ID_API + " Servidor: " + grpcRes.getServidor()
                });
        })
    }catch(error)
    {
        return res.status(500).json({
            ok: false,
            msg: "Error en Crear Asistencia del Servidor API",
            msg_body: req.body,
            servidor: process.env.ID_API
        })
    }
    

}

const ListarAsistencias = async (req, res) => {
    console.log("Listando asistencias API")
    let {carnet} = req.body
    if (!carnet){
        carnet = 0
    }
    clienteGRPC.listarAsistencias(carnet, function(grpcRes){
        let asistencias = []
        grpcRes.forEach(element => {
            let reporte = {
                    carnet: element.getCarnet(),
                    nombre: element.getNombre(),
                    nombreEvento: element.getNombreevento(),
                    idEvento: element.getIdevento(),
                    extencion: element.getExtencion(),
                    base64: element.getBase64(),
                    fecha: element.getFecha(),
                    servidor: process.env.ID_API + " Servidor: " + element.getServidor()
            }
            asistencias.push(reporte)
        });
        return res.status(200).json(asistencias)
    })
}

module.exports = {
    status,
    crearReporte,
    listarReportes,
    verReporte,
    ListarAsistencias,
    CrearAsistencia
}