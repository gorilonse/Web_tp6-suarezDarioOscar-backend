const Autor = require('../models/Autor');
const autorCtrl = {}

//Dar de alta un Espectador (POST)
autorCtrl.createAutor = async (req, res) => {
    var autor = new Autor(req.body);
    try {
        console.log(req.body);
        //console.log(producto);
    await autor.save();
    res.json({
    'status': '1',
    'msg': 'Autor guardado.'})
    } catch (error) {
    res.status(400).json({
    'status': '0',
    'msg': 'Error procesando Autor.'})
    }
    }

    module.exports = autorCtrl;

