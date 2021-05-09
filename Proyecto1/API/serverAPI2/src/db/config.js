const mongoose = require("mongoose");

var url_mongo = `mongodb://${process.env.USER_DB}:${process.env.PASS_DB}@${process.env.SERVER_DB}/admin`

const dbConnection = async () => {
    try {
        await mongoose.connect(url_mongo, {
            useNewUrlParser: true,
            useUnifiedTopology: true, 
            useCreateIndex: true
        });
        mongoose.connection.db.dropDatabase(function(err, result) {});
        console.log('MongoDB conectado!');
    } catch (error) {
        console.log(error);
        throw new Error('Error al inicializar la base de datos.');
    }
}


module.exports = {
    dbConnection,
}