console.log("INICIANDO APLICACION SERVER")

// =========================== CONFIGURACION DE SERVIDOR =====================
const id_server     = process.env.ID_API
const port_server   = process.env.PORT_API

// =========================== LEVANTAR APLICACION ===========================
const express = require("express")
, bodyParser = require('body-parser');
const app = express();
const axios = require('axios').default
const { dbConnection } = require('./db/config');
// Controladores
const { crearReporte, listarReportes, verReporte } = require('./controllers/reporte.controller');

// DB
dbConnection();


/**
 *  API SERVER
 */

app.listen(port_server, () => {
    console.log("Servidor: " + id_server + " " + port_server);
});
app.use(bodyParser.json());

app.get('/status', function (req, res) {
    res.send('Servidor ' + id_server + " activo !!!");
    res.status(200)
});

app.post('/enviar', crearReporte)

app.get('/listar', listarReportes)

app.get('/reporte/:id', verReporte)