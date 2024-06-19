const Transaccion = require('../models/Transaccion');
const transaccionCtrl = {}



//Dar de alta un Transaccion (POST)
transaccionCtrl.createTransaccion = async (req, res) => {
var transaccion = new Transaccion(req.body);
try {
    console.log(req.body);
    //console.log(producto);
await transaccion.save();
res.json({
'status': '1',
'msg': 'Transaccion guardado.'})
} catch (error) {
res.status(400).json({
'status': '0',
'msg': 'Error procesando transaccion.'})
}
}

//Recuperar TODOS los transacciones (GET)
transaccionCtrl.getTransacciones = async (req, res) => {
    var transacciones = await Transaccion.find();
    res.json(transacciones);
    }


//Recuperar por dos parametros "". SE DEBE MODIFICAR EL URL
  transaccionCtrl.getTransacciones2parametros = async (req, res) => {
    var transacciones = await Transaccion.find({monedaOrigen:req.params.monedaOrigen,monedaDestino:req.params.monedaDestino});
    res.json(transacciones);
    }

//Recuperar por un parametro Email "". SE DEBE MODIFICAR EL URL
transaccionCtrl.getTransacciones1paraEmail = async (req, res) => {
    var transacciones = await Transaccion.find({emailCliente:req.params.emailCliente});
    res.json(transacciones);
    }





//Eliminar un transaccion (DELETE)
transaccionCtrl.deleteTransaccion = async (req, res)=>{
    try {
    await Transaccion.deleteOne({_id: req.params.id});
    res.json({
    status: '1',
    msg: 'Transaccion removed'
    })
    } catch (error) {
    res.status(400).json({
    'status': '0',
    'msg': 'Error procesando la Eliminacion de Transaccion'
    })
    }
    }

    //Modificar un Transaccion (PUT)
transaccionCtrl.editTransaccion = async (req, res) => {
    const variantetransaccion = new Transaccion(req.body);
    try {
    await Transaccion.updateOne({_id: req.body._id}, variantetransaccion);
    res.json({
    'status': '1',
    'msg': 'Producto updated/Modificado'
    })
    } catch (error) {
    res.status(400).json({
    'status': '0',
    'msg': 'Error procesando la operacion Modificar'
    })
    }
    }

    
    
//Recuperar de TODOS solo uno que coincide con un parametro (GET)
transaccionCtrl.getTransaccion = async (req, res) => {
const transaccion = await Transaccion.findById(req.params.id);
res.json(transaccion);
}

module.exports = transaccionCtrl;


