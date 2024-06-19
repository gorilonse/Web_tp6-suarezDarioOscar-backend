//defino controlador para el manejo de CRUD
const autorCtrl = require('./../controllers/autor.controller');
//creamos el manejador de rutas
const express = require('express');
const router = express.Router();
//definimos las rutas para la gestion de agente
router.post('/', autorCtrl.createAutor);  // localhost:3000/api/producto


module.exports = router;