const Contenido = require('../models/contenido')
const mongoose = require("mongoose");
const { json } = require('express');
const contenido = require('../models/contenido');

exports.postAgregarContenido = async (req,res)=>{
    const contenido = new Contenido(req.body)
    contenido.playlist = "none"
    //CHECAR SI NO ESTA REPETIDO -- FALTA AUMENTAR CONTADOR 
    const DatoRepetido = await Contenido.findOne({ 
            tipo : req.body.tipo,
            titulo : req.body.titulo
    });
    
    if (DatoRepetido === null) {
        try{
            //Agregar el documento a la colección
            await contenido.save()
            console.log(contenido)
            console.log("Ha sido registrado")
            res.send({operacion:"correcta"})
        }catch(err){
            console.log(err)
            res.send({operacion: "incorrecta"})
        }
    }else{
        console.log("Ya está registrado")
        res.json({estado:"ya existe"})
        
    }
}

exports.getObtenerContenido=async (req,res)=>{
    const cont = await Contenido.find() //modificar para que lo encuentre por pais
    console.log("Obtener el contenido deseado")
    console.log(cont)
    res.json(cont)
}

exports.postActualizarContenido = async(req,res)=>{
    //Filtro y cambio
    try{
        await Contenido.findOneAndUpdate({tipo:req.body.tipo,titulo:req.body.titulo},{año:req.body.año})
        console.log("Cambio realizado")
        res.json({operacion: "correcta"})
    }catch(err){
        console.log(err)
        res.json({operacion: "incorrecta"})
    }
}

exports.postBorrarContenido = async (req,res)=>{
    await Contenido.findOneAndDelete({tipo:req.body.tipo,titulo:req.body.titulo})
    console.log("Ha sido eliminadx")
    res.json({operacion: "correcta"})
}

//playlist
exports.postAgregaraLaPlaylist = async (req,res)=>{
    try {
        await Contenido.findOneAndUpdate({tipo:req.body.tipo,titulo:req.body.titulo},{playlist:req.body.playlist})
        res.json({
            "estado":"correcto"
        })
        
        
    } catch (error) {
        console.log(error)
        res.json({
            "estado":"incorrecto"
        })
    }

}

exports.getPlaylist = async (req,res)=>{
    try {
        const playlist = await Contenido.find({playlist:req.params.playlist})
        res.json(playlist )
        
    } catch (error) {
        console.log(error)
        res.json({
            "estado":"incorrecto"
        })
    }

}

exports.postBorrarPlaylist = async (req,res)=>{
    try {
        await Contenido.updateMany({"playlist":req.body.playlist},{"$set":{"playlist":"none"}})
        //console.log("Ha sido eliminadx")
        //await Contenido.remove()
        res.json({operacion: "correcta"})
        
    } catch (error) {
        res.json({
            "estado":"incorrecto"
        })
        
    }
}