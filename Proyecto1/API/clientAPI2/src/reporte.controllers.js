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

}

const listarReportes = async (req, res) => {

}

const verReporte = async (req, res) => {

}

module.exports = {
    status,
    crearReporte,
    listarReportes,
    verReporte
}