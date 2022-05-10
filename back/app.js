const express= require('express')
const app = express()

const db = require('./db/index')



app.listen(3001,function(){
    console.log('Escuchando en el Puerto 3001')
})