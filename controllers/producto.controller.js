const Producto = require('../models/Producto');
const productoCtrl = {}


//Dar de alta un Producto (POST)
productoCtrl.createProducto = async (req, res) => {
var producto = new Producto(req.body);
try {
    console.log(req.body);
    //console.log(producto);
await producto.save();
res.json({
'status': '1',
'msg': 'Producto guardado.'})
} catch (error) {
res.status(400).json({
'status': '0',
'msg': 'Error procesando operacion.'})
}
}

//Recuperar TODOS los productos (GET)
productoCtrl.getProductos = async (req, res) => {
    var productos = await Producto.find();
    res.json(productos);
    }
//Recuperar por un parametro en espeficio POR EL ESTADO true.
    productoCtrl.getProductos2 = async (req, res) => {
        var productos = await Producto.find({destacado:true});
        res.json(productos);
        }
    //Recuperar por un parametro en espeficio POR EL ESTADO true o false. SE DEBE MODIFICAR EL URL
        productoCtrl.getProductos4 = async (req, res) => {
            var productos = await Producto.find({destacado:req.params.destacado});
            res.json(productos);
            }
    //Recuperar por dos parametros "boolean y nombre". SE DEBE MODIFICAR EL URL
        productoCtrl.getProductos5 = async (req, res) => {
            var productos = await Producto.find({destacado:req.params.destacado,nombre:req.params.nombre});
            res.json(productos);
            }


//Eliminar un producto (DELETE)
productoCtrl.deleteProducto = async (req, res)=>{
    try {
    await Producto.deleteOne({_id: req.params.id});
    res.json({
    status: '1',
    msg: 'Producto removed'
    })
    } catch (error) {
    res.status(400).json({
    'status': '0',
    'msg': 'Error procesando la Eliminacion de Producto'
    })
    }
    }

    //Modificar un producto (PUT)
productoCtrl.editProducto = async (req, res) => {
    const varianteproducto = new Producto(req.body);
    try {
    await Producto.updateOne({_id: req.body._id}, varianteproducto);
    res.json({
    'status': '1',
    'msg': 'Producto updated'
    })
    } catch (error) {
    res.status(400).json({
    'status': '0',
    'msg': 'Error procesando la operacion'
    })
    }
    }

    
    
//Recuperar de TODOS solo uno que coincide con un parametro (GET)
productoCtrl.getProducto = async (req, res) => {
const producto = await Producto.findById(req.params.id);
res.json(producto);
}




module.exports = productoCtrl;


