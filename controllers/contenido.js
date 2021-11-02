const Contenido = require('../models/contenido')
const mongoose = require("mongoose");
const { json } = require('express');
const contenido = require('../models/contenido');

exports.postAgregarContenido = async (req,res)=>{
    const contenido = new Contenido(req.body)
    contenido.playlist = "none"
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
            res.status(200).send({operacion:"correcta"})
        }catch(err){
            console.log(err)
            res.status(200).send({operacion: "incorrecta"})
        }
    }else{
        console.log("Ya está registrado")
        res.status(422).json({estado:"ya existe"})
        
    }
}

exports.getObtenerContenido=async (req,res)=>{
    const cont = await Contenido.find() //modificar para que lo encuentre por pais
    console.log("Obtener el contenido deseado")
    console.log(cont)
    res.status(200).json(cont)
}

exports.postActualizarContenido = async(req,res)=>{
    //Filtro y cambio
    try{
        await Contenido.findOneAndUpdate({tipo:req.body.tipo,titulo:req.body.titulo},{año:req.body.año})
        console.log("Cambio realizado")
        res.status(200).json({operacion: "correcta"})
    }catch(err){
        console.log(err)
        res.status(422).json({operacion: "incorrecta"})
    }
}

exports.postBorrarContenido = async (req,res)=>{
    await Contenido.findOneAndDelete({tipo:req.body.tipo,titulo:req.body.titulo})
    console.log("Ha sido eliminadx")
    res.status(200).json({operacion: "correcta"})
}

//playlist
exports.postAgregaraLaPlaylist = async (req,res)=>{
    try {
        const dato = await Contenido.findOneAndUpdate({tipo:req.body.tipo,titulo:req.body.titulo},{playlist:req.body.playlist})
        console.log(dato)
        if(dato===null){
            res.status(422).json({
                "estado":"Contenido inexistente"
            })
        }
        else{
            res.status(200).json({
                "estado":"correcto"
            })
        }
        
    } catch (error) {
        console.log(error)
        res.status(422).json({
            "estado":"incorrecto"
        })
    }

}

exports.getPlaylist = async (req,res)=>{
    try {
        const playlist = await Contenido.find({playlist:req.params.playlist})
        res.status(200).json(playlist )
        
    } catch (error) {
        console.log(error)
        res.status(422).json({
            "estado":"incorrecto"
        })
    }

}

exports.postActualizarPlaylist = async (req,res)=>{
    try{
        await Contenido.findOneAndUpdate({"playlist":req.body.playlist,"titulo":req.body.titulo},{"playlist":"none"})
        console.log("Cambio realizado")
        res.status(200).json({operacion: "correcta"})
    }catch(err){
        console.log(err)
        res.status(422).json({operacion: "incorrecta"})
    }

}

exports.postBorrarPlaylist = async (req,res)=>{
    try {
        await Contenido.updateMany({"playlist":req.body.playlist},{"$set":{"playlist":"none"}})
        //console.log("Ha sido eliminadx")
        //await Contenido.remove()
        res.status(200).json({operacion: "correcta"})
        
    } catch (error) {
        res.status(422).json({
            "estado":"incorrecto"
        })
        
    }
}