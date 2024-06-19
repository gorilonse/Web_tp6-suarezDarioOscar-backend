const Object = require('../models/Object');
const objectCtrl = {}



//Dar de alta un Object (POST)
objectCtrl.createObject = async (req, res) => {
var object = new Object(req.body);
try {
    console.log(req.body);
    //console.log(producto);
await object.save();
res.json({
'status': '1',
'msg': 'Object guardado.'})
} catch (error) {
res.status(400).json({
'status': '0',
'msg': 'Error procesando Object.'})
}
}

//Recuperar TODOS los Object (GET)
objectCtrl.getObjects = async (req, res) => {   //el nombre del atributo
    var objects = await Object.find();
    res.json(objects);
    }

//Eliminar un Object (DELETE)
objectCtrl.deleteObject = async (req, res)=>{
    try {
    await Object.deleteOne({_id: req.params.id});
    res.json({
    status: '1',
    msg: 'Object removed/Eliminado'
    })
    } catch (error) {
    res.status(400).json({
    'status': '0',
    'msg': 'Error procesando la Eliminacion de Object'
    })
    }
    }

    //Modificar un Object (PUT)
    objectCtrl.editObject = async (req, res) => {
        const varianteobject = new Object(req.body);
        try {
        await Object.updateOne({_id: req.body._id}, varianteobject);
        res.json({
        'status': '1',
        'msg': 'Object updated'
        })
        } catch (error) {
        res.status(400).json({
        'status': '0',
        'msg': 'Error procesando/Modificando el Object'
        })
        }
        }

//Metodo get que usa 1 Parametro
objectCtrl.getObject1parametro = async (req, res) => {
    var objects = await Object.find({parametro:req.params.parametro});
    res.json(objects);
    }


//Recuperar de TODOS solo uno que coincide con un parametro (GET)
objectCtrl.getObject1paraID = async (req, res) => {
    const object = await Object.findById(req.params.id);
    res.json(object);
    }



module.exports = objectCtrl;


