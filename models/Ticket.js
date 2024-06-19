const mongoose = require('mongoose');
const Espectador = require('./Espectador');
const {Schema} = mongoose;


const TicketSchema = new Schema({
precioTicket: {type: Number, required: true},
categoriaEspectador: {type: String, required: true},
fechaCompra: {type:String, required: true}, // gestinar fecha como string
//espectador: {type:Espectador(Schema.Types.ObjectId), required:true} //categoría del espectador puede ser: e = Extranjero, l = local.
espectador:{type:Schema.Types.ObjectId,ref:Espectador,required:true} //POR ASOCIACION o AGREGACION, ver COMPOSICION
})
module.exports = mongoose.models.Ticket || mongoose.model('Ticket', TicketSchema);