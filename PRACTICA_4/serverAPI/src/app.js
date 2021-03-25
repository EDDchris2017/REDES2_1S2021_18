console.log("INICIANDO APLICACION SERVER")

// =========================== CONFIGURACION DE SERVIDOR =====================
const id_server     = process.env.ID_API
const port_server   = process.env.PORT_API

// =========================== LEVANTAR APLICACION ===========================
const express = require("express")
, bodyParser = require('body-parser');
const app = express();
const axios = require('axios').default


/**
 *  API SERVER
 */
app.listen(port_server, () => {
    console.log("Servicio ESB: " + port_server);
});
app.use(bodyParser.json());

app.get('/status', function (req, res) {
    res.send('Servidor ' + id_server + " activo !!!");
    res.status(200)
});