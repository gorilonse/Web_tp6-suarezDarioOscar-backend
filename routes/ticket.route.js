//defino controlador para el manejo de CRUD
const ticketCtrl = require('./../controllers/ticket.controller');
//creamos el manejador de rutas
const express = require('express');
const router = express.Router();
//definimos las rutas para la gestion de agente
router.post('/', ticketCtrl.createTicket);  // localhost:3000/api/producto
router.get('/', ticketCtrl.getTickets);   // recupera todos
router.delete('/:id', ticketCtrl.deleteTicket); // localhost:3000/api/producto/666f8286180be77513d2b9eb PARA ELIMINAR
//exportamos el modulo de rutas
router.put('/:id', ticketCtrl.editTicket ); //modificar 
router.get('/:categoriaEspectador',ticketCtrl.getTicket1paraEspectador);//recuperar por categoría de espectador
router.get('/:id', ticketCtrl.getTicket1paraID); // recuperar por ID



module.exports = router;