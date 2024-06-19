const Ticket = require('../models/Ticket');
const ticketCtrl = {}



//Dar de alta un Ticket (POST)
ticketCtrl.createTicket = async (req, res) => {
var ticket = new Ticket(req.body);
try {
    console.log(req.body);
    //console.log(producto);
await ticket.save();
res.json({
'status': '1',
'msg': 'Ticket guardado.'})
} catch (error) {
res.status(400).json({
'status': '0',
'msg': 'Error procesando Ticket.'})
}
}

//Recuperar TODOS los Ticket (GET)
ticketCtrl.getTickets = async (req, res) => {   //el nombre del atributo
    var tickets = await Ticket.find().populate("espectador"); //Con este agregdo veo los atributos del objeto Espectador.
    res.json(tickets);
    }

//Eliminar un Ticket (DELETE)
ticketCtrl.deleteTicket = async (req, res)=>{
    try {
    await Ticket.deleteOne({_id: req.params.id});
    res.json({
    status: '1',
    msg: 'Ticket removed/Eliminado'
    })
    } catch (error) {
    res.status(400).json({
    'status': '0',
    'msg': 'Error procesando la Eliminacion de Ticket'
    })
    }
    }

    //Modificar un Ticket (PUT)
    ticketCtrl.editTicket = async (req, res) => {
        const varianteticket = new Ticket(req.body);
        try {
        await Ticket.updateOne({_id: req.body._id}, varianteticket);
        res.json({
        'status': '1',
        'msg': 'Ticket updated'
        })
        } catch (error) {
        res.status(400).json({
        'status': '0',
        'msg': 'Error procesando/Modificando el Ticket'
        })
        }
        }


//Recuperar por un parametro categoría de espectador //extranjero o local "". SE DEBE MODIFICAR EL URL
ticketCtrl.getTicket1paraEspectador = async (req, res) => {                              //con esto traigo el objeto y entre comillas el nombre de la variable tal como esta en la clase.
    var tickets = await Ticket.find({categoriaEspectador:req.params.categoriaEspectador}).populate("espectador");
    res.json(tickets);
    }

    

    //NO ESTA EN USO AUN
//Recuperar de TODOS solo uno que coincide con un parametro (GET)
ticketCtrl.getTicket1paraID = async (req, res) => {
    const ticket = await Ticket.findById(req.params.id).populate("espectador");
    res.json(ticket);
    }

module.exports = ticketCtrl;


