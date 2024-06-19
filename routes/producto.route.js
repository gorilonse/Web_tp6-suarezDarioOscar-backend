//defino controlador para el manejo de CRUD
const productoCtrl = require('./../controllers/producto.controller');
//creamos el manejador de rutas
const express = require('express');
const router = express.Router();
//definimos las rutas para la gestion de agente
router.get('/:destacado,:nombre', productoCtrl.getProductos5);   // localhost:3000/api/producto  O SINO localhost:3000/api/producto/
router.get('/', productoCtrl.getProductos);   // 
router.post('/', productoCtrl.createProducto);  // localhost:3000/api/producto
router.get('/:id', productoCtrl.getProducto); // 
router.put('/:id', productoCtrl.editProducto); 
router.delete('/:id', productoCtrl.deleteProducto); // localhost:3000/api/producto/666f8286180be77513d2b9eb PARA ELIMINAR
//exportamos el modulo de rutas
module.exports = router;