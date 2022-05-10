const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/usuarios');

const objetobd = mongoose.connection

objetobd.on('connected', ()=>{console.log('Conexion a Mongodb')})
objetobd.on('error', ()=>{console.log('Error a Mongodb')})

module.exports= mongoose