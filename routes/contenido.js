//imports
const router = require('express').Router()

//controllers
const contenidoController = require('../controllers/contenido')

//CRUD CONTENIDO
//Create
router.post('/agregarContenido',contenidoController.postAgregarContenido)

//Read
router.get('/obtenerContenido',contenidoController.getObtenerContenido)

//Update
router.post('/actualizarContenido',contenidoController.postActualizarContenido)

//Delete
router.post('/borrarContenido',contenidoController.postBorrarContenido)

//CRUD PARA MANEJAR EL CONTENIDO A UNA PLAYLIST ESPECIFICA
//Create
router.post('/agregaraLaPlaylist',contenidoController.postAgregaraLaPlaylist)
router.get('/Playlist/:playlist',contenidoController.getPlaylist)
router.post('/borrarPlaylist',contenidoController.postBorrarPlaylist )




//exportar las rutas
module.exports=router