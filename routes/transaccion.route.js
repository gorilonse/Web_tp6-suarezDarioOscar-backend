//defino controlador para el manejo de CRUD
const transaccionCtrl = require('./../controllers/transaccion.controller');
//creamos el manejador de rutas
const express = require('express');
const router = express.Router();
//definimos las rutas para la gestion de agente
router.post('/', transaccionCtrl.createTransaccion);  // localhost:3000/api/producto
router.get('/', transaccionCtrl.getTransacciones);   // 
router.get('/:monedaOrigen,:monedaDestino',transaccionCtrl.getTransacciones2parametros);
router.get('/:emailCliente',transaccionCtrl.getTransacciones1paraEmail);


router.delete('/:id', transaccionCtrl.deleteTransaccion); // localhost:3000/api/producto/666f8286180be77513d2b9eb PARA ELIMINAR
//exportamos el modulo de rutas
router.put('/:id', transaccionCtrl.editTransaccion); 
router.get('/:id', transaccionCtrl.getTransaccion); // 

module.exports = router;