const express = require('express');
const cors = require('cors');
const {mongoose} = require('./database');
const { discriminators } = require('./models/Espectador.js');
const { discriminators2 } = require('./models/Autor.js'); //PARA EXAMEN
const { getTransacciones1paraEmail } = require('./controllers/transaccion.controller.js');
var app = express();
//middlewares
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));
//Cargamos el modulo de direccionamiento de rutas
//app.use('/api/agente', require('./routes/agente.route.js'));
app.use('/api/producto', require('./routes/producto.route.js'));
app.use('/api/transaccion', require('./routes/transaccion.route.js'));
app.use('/api/espectador', require('./routes/espectador.route.js'));
app.use('/api/ticket', require('./routes/ticket.route.js'));
//EXAMEN
app.use('/api/autor', require('./routes/autor.route.js'));
app.use('/api/libro', require('./routes/libro.route.js'));
//FIN EXAMEN
app.use('/api/object',require('./routes/object.route.js'));
//app.use('/api/sector', require('./routes/sector.route'));
//setting
app.set('port', process.env.PORT || 3000);
//starting the server
app.listen(app.get('port'), () => {
console.log(`Server started on port`, app.get('port'));
});

