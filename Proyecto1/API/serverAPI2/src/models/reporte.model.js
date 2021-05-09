const { Schema, model } = require("mongoose");

const reporteSchema = Schema({
    id_r: {
        type: String,
        require: true,
        unique: true
    },
    carnet: {
        type: Number,
        required: true,
    },
    nombre: {
        type: String,
        required: true,
    },
    curso: {
        type: String,
        required: true,
    },
    cuerpo: {
        type: String,
        required: true
    },
    fecha: {
        type: String,
        required: true
    }
});


var modelo = model('Reporte', reporteSchema);
module.exports = modelo