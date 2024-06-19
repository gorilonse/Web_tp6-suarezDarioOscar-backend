//defino controlador para el manejo de CRUD
const espectadorCtrl = require('./../controllers/espectador.controller');
//creamos el manejador de rutas
const express = require('express');
const router = express.Router();
//definimos las rutas para la gestion de agente
router.post('/', espectadorCtrl.createEspectador);  // localhost:3000/api/producto
router.get('/', espectadorCtrl.getEspecatadores);   // 
router.get('/:email',espectadorCtrl.getEspectador1paraEmail);
router.get('/:id', espectadorCtrl.getEspectador1paraID); // 


//router.delete('/:id', espectadorCtrl.deleteTransaccion); // localhost:3000/api/producto/666f8286180be77513d2b9eb PARA ELIMINAR
//exportamos el modulo de rutas
//router.put('/:id', espectadorCtrl.editTransaccion); 


module.exports = router;