const { v4: uuidv4 } = require('uuid');

// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region 
AWS.config.update({region: 'us-east-2'});

// Create S3 service object
s3 = new AWS.S3({apiVersion: '2006-03-01'});

// Call S3 to list the buckets
const listarBuckets = async () => {
    s3.listBuckets(function(err, data) {
        if (err) {
          console.log("Error", err);
        } else {
          console.log("Success", data.Buckets);
        }
    });
}


const insertarImagen = (base64,extencion, callback) => {
	let buf = Buffer.from(base64, 'base64')
	var params = {
		Bucket: "proyectog18",
		Key: uuidv4(), 
		Body: buf,
		ContentEncoding: 'base64',
		ContentType: 'image/'+extencion,
		ACL: 'public-read-write',
	};
	s3.upload(params, function(err, data){
		if(err){
			console.log("Error en guardar Imagen S3")
			callback(undefined)
		} else {
			callback(data.Location)
		}	
	});
}


module.exports = {
	listarBuckets,
	insertarImagen
}

