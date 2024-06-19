//defino controlador para el manejo de CRUD
const libroCtrl = require('./../controllers/libro.controller');
//creamos el manejador de rutas
const express = require('express');
const router = express.Router();
//definimos las rutas para la gestion de agente
router.post('/', libroCtrl.createLibro);  // localhost:3000/api/producto
router.get('/', libroCtrl.getLibros);   // 
router.get('/:codigo,:autor.apellido',libroCtrl.getLibros2parametros);


module.exports = router;