const mongoose = require('mongoose');
const URI = 'mongodb://localhost/db1';
mongoose.connect(URI)
.then(db=>console.log('DB is connected / Conectado a la Base de Datos MONGO'))
.catch(err=>console.error(err))
module.exports = mongoose;