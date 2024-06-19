const mongoose = require('mongoose');
const Autor = require('./Autor');
const {Schema} = mongoose;


const LibroSchema = new Schema({
codigo:{type: String, required: true},
titulo:{type: String, required: true},
cantidadDePaginas:{type: String, required: true},
anioDeEdicion:{type: String, required: true},
autor:{type:Schema.Types.ObjectId,ref:Autor,required:true} //atributo con objeto dentro
})
module.exports = mongoose.models.Libro || mongoose.model('Libro', LibroSchema);