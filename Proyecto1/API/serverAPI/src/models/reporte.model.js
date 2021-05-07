const { Schema, model } = require("mongoose");

const reporteSchema = Schema({
    carnet: {
        type: Number,
        required: true,
    },
    nombre: {
        type: String,
        required: true,
        unique: true,
    },
    curso: {
        type: String,
        required: true,
    },
    cuerpo: {
        type: String,
        required: true
    }
});


module.exports = model('Reporte', reporteSchema);