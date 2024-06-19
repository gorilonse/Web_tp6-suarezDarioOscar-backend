//defino controlador para el manejo de CRUD
const objectCtrl = require('./../controllers/object.controller');
//creamos el manejador de rutas
const express = require('express');
const router = express.Router();
//definimos las rutas para la gestion de agente
router.post('/', objectCtrl.createObject);  // localhost:3000/api/producto
router.get('/', objectCtrl.getObjects);   // recupera todos
router.delete('/:id', objectCtrl.deleteObject); // localhost:3000/api/producto/666f8286180be77513d2b9eb PARA ELIMINAR
//exportamos el modulo de rutas
router.put('/:id', objectCtrl.editObject ); //modificar 
router.get('/:categoriaEspectador',objectCtrl.getObject1parametro);//recuperar por categoría de espectador
router.get('/:id', objectCtrl.getObject1paraID); // recuperar por ID



module.exports = router;