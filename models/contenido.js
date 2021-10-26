const mongoose = require('mongoose')

const ContenidoSchema = mongoose.Schema({
    tipo:{
        type:String,
        required: true
    },
    titulo:{
        type:String,
        required:true
    },
    autor:{
        type:String,
        required: true
    },
    año:{
        type:Number,
    },
    genero:{
        type:String
    },
    duracion:{
        type:String
    },
    playlist:{
        type:String
    }
},{collection:'contenido'})

// Compilar el modelo 
module.exports = mongoose.model('contenido', ContenidoSchema )