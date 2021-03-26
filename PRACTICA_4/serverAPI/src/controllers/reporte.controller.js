const Reporte = require("../models/reporte.model");

const crearReporte = async (req, res) => {
    const { carnet, nombre, curso, cuerpo} = req.body
    try{
        // Crear modelo de reporte
        const nuevoReporte = new Reporte( req.body )

        // Guardar reporte en BD
        await nuevoReporte.save();

        return res.status(200).json({
            ok: true,
            msg: "Reporte creado",
            carnet: nuevoReporte.carnet,
            nombre: nuevoReporte.nombre,
            curso:  nuevoReporte.curso,
            cuerpo: nuevoReporte.cuerpo,
            servidor: process.env.ID_API
        });

    }catch(error){
        return res.status(500).json({
            ok: false,
            msg: "Error en el Servidor",
            msg_error: req.body,
            servidor: process.env.ID_API
        })
    }
}

const listarReportes = async (req, res) => {
    const {carnet} = req.body
    
    try
    {
        let dbReporte = undefined
        if (carnet){
            dbReporte = await Reporte.find({ carnet: carnet}).exec()
            
        }else{
            dbReporte = await Reporte.find({ }).exec()
        }
        if(!dbReporte){
            return res.status(401).json({
                ok: false,
                msg: "No se encontro ningun reporte",
                servidor: process.env.ID_API
            })
        }

        res_array = []
        dbReporte.forEach(e => {
            x = {
                carnet: e.carnet,
                nombre: e.nombre,
                curso: e.curso,
                fecha: "03-26-2021",
                cuerpo: e.cuerpo,
                servidor: process.env.ID_API
            }
            res_array.push(x)
        });

        /*return res.status(200).json({
            ok: true,
            msg: "Se encontraron datos de reportes",
            servidor: process.env.ID_API,
            lista: dbReporte
        })*/
        return res.status(200).json(res_array)
        
    }catch(error){
        return res.status(500).json({
            ok: false,
            msg: "Error en el Servidor",
            servidor: process.env.ID_API
        })
    }
}

const verReporte = async (req, res) => {
    id_reporte = req.params.id

    try{

        let dbReporte = await Reporte.findOne({"_id":id_reporte});

        if(!dbReporte){
            return res.status(401).json({
                ok: false,
                msg: "No se encontro ningun reporte",
                servidor: process.env.ID_API
            })
        }

        return res.status(200).json({
            ok: true,
            msg: "Se encontro reporte individual",
            servidor: process.env.ID_API,
            reporte: dbReporte
        })

    }catch(error){
        return res.status(500).json({
            ok: false,
            msg: "Error en el Servidor",
            servidor: process.env.ID_API
        })
    }
}

module.exports = {
    crearReporte,
    listarReportes,
    verReporte
}