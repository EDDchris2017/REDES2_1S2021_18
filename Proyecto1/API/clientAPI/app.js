// ********** CLIENTE API PROYECTO 1 REDES 2 **********

// =========================== CONFIGURACION DE SERVIDOR =====================
const id_server     = "API_1"
const port_server   = 4000

// =========================== LEVANTAR APLICACION ===========================
const express = require("express")
, bodyParser = require('body-parser');
const app = express();
const axios = require('axios').default
//const { dbConnection } = require('./db/config');
// Controladores
const { status, crearReporte, listarReportes, verReporte } = require('./reporte.controllers');

/**
 *  API SERVER
 */

app.listen(port_server, () => {
    console.log("Client API: " + id_server + " \nPUERTO:" + port_server);
});
app.use(bodyParser.json());

app.get('/status', function (req, res) {
    res.send('Servidor ' + id_server + " activo !!!");
    res.status(200)
});

app.get('/status-grpc', status);

/*
app.post('/enviar', crearReporte)

app.get('/listar', listarReportes)

app.get('/reporte/:id', verReporte)
*/