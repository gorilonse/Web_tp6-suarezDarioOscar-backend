const mongoose = require('mongoose');
const {Schema} = mongoose;


const AutorSchema = new Schema({
apellido: {type: String, required: true},
nombre: {type: String, required: true},
dni: {type:String, required: true},
})
module.exports = mongoose.models.Autor || mongoose.model('Autor', AutorSchema);