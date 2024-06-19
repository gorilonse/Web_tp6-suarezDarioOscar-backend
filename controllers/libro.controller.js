const Libro = require('../models/Libro');
const libroCtrl = {}




//Dar de alta un Libro (POST)
libroCtrl.createLibro = async (req, res) => {
var libro = new Libro(req.body);
try {
    console.log(req.body);
    //console.log(producto);
await ticket.save();
res.json({
'status': '1',
'msg': 'Libro guardado.'})
} catch (error) {
res.status(400).json({
'status': '0',
'msg': 'Error procesando Libro.'})
}
}

//Recuperar TODOS los Libro (GET)
libroCtrl.getLibros = async (req, res) => {   //el nombre del atributo
    var libros = await Libro.find().populate("autor"); //Con este agregdo veo los atributos del objeto Espectador.
    res.json(libros);
    }

//Recuperar por dos parametros TODOS los Libro (GET)
libroCtrl.getLibros2parametros = async (req, res) => {
    var libros = await Libro.find({codigo:req.params.codigo,autor:req.params.autor});
    res.json(libros);
    }


    module.exports = libroCtrl;




