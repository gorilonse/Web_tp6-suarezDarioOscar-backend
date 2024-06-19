const Espectador = require('../models/Espectador');
const espectadorCtrl = {}



//Dar de alta un Espectador (POST)
espectadorCtrl.createEspectador = async (req, res) => {
var espectador = new Espectador(req.body);
try {
    console.log(req.body);
    //console.log(producto);
await espectador.save();
res.json({
'status': '1',
'msg': 'Espectador guardado.'})
} catch (error) {
res.status(400).json({
'status': '0',
'msg': 'Error procesando espectador.'})
}
}

//Recuperar TODOS los Espectadores (GET)
espectadorCtrl.getEspecatadores = async (req, res) => {
    var espectadores = await Espectador.find();
    res.json(espectadores);
    }


    //NO UTILIZADOS

//Recuperar por un parametro Email "". SE DEBE MODIFICAR EL URL
espectadorCtrl.getEspectador1paraEmail = async (req, res) => {
    var espectadores = await Espectador.find({email:req.params.email});
    res.json(espectadores);
    }

//Recuperar de TODOS solo uno que coincide con un parametro (GET)
espectadorCtrl.getEspectador1paraID = async (req, res) => {
    const espectador = await Espectador.findById(req.params.id);
    res.json(espectador);
    }



module.exports = espectadorCtrl;


