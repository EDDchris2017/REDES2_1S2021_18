console.log("INICIANDO FRONTEND")


// =========================== LEVANTAR APLICACION ===========================
const express = require("express")
, bodyParser = require('body-parser');
const app = express();
var path = require('path');
const axios = require('axios').default


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const puerto_server = process.env.PORT_FRONTEND;
const puerto_balancer = process.env.PORT_BALANCER;
const server_balancer = process.env.SERVER_BALANCER;
console.log("SERVER BALANCER " + server_balancer)
var url_balancer = server_balancer + ":" + puerto_balancer

app.use(bodyParser.json());
app.use(express.static('public'));
//app.use(express.static(path.join(__dirname, 'public')));

/**
 *  API SERVER
 */

app.listen(puerto_server, () => {
    console.log("Servidor Frontend");
});

app.use('*', (req, res) => {
    res.sendFile(__dirname + '/public' );
});

app.get('/status', function (req, res) {
    res.send('Servidor frontend activo !!!');
    res.status(200)
});

/*app.get('/', function (req, res){
    res.sendFile(path.join(__dirname + 'index.html')); 
})*/

app.post('/enviar', async (req, res) => {
    enviarDatos('post', url_balancer + "/enviar", req.body,function(msg){
        return res.status(200).json(msg)
    })
})

app.get('/listar', async (req, res) => {
    enviarDatos('post', url_balancer + "/listar", req.body,function(msg){
        return res.status(200).json(msg)
    })
})

app.get('/reporte/:id', function (req, res){
    enviarDatos('post', url_balancer + "/reporte/" + req.params.id, req.body,function(msg){
        return res.status(200).json(msg)
    })
})

function enviarDatos(method, url,datos,callback)
{
    url = 'http://' + url
    console.log(url)
    // Solicitar Pedido
    let parametros = {
        method: method,
        url: url,
        data: datos,
        headers: {
            'Content-Type': 'application/json'
        }   
    }
    //return new Promise(resolve => {
        axios(parametros)
            .then( function (response) {
                callback(response.data)
            })
            .catch( function (error) {
                console.error(error)
            });
    //});
}