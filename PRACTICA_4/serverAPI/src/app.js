// =========================== CONFIGURACION DE SERVIDOR =====================
const id_server = process.env.ID_API

// =========================== LEVANTAR APLICACION ===========================
const express = require("express")
, bodyParser = require('body-parser');
const app = express();
const axios = require('axios').default


/**
 *  API SERVER
 */
app.listen(process.env.PORT_API, () => {
    console.log("Servicio ESB: 3004");
});
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.send('Servidor ' + id_server + " activo !!!");
    res.status(200)
});