const { Schema, model } = require("mongoose");

const asistenciaSchema = Schema({
    carnet: {
        type: Number,
        required: true,
    },
    nombre: {
        type: String,
        required: true,
    },
    nombreEvento: {
        type: String,
        required: true,
    },
    idEvento: {
        type: Number,
        required: true
    },
    extencion: {
        type: String,
        required: true
    },
    base64 : {
        type: String,
        required: true
    },
    fecha: {
        type: String,
        required: true
    }
});


var modelo = model('Asistencia', asistenciaSchema);
module.exports = modelo