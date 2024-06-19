const mongoose = require('mongoose');
const {Schema} = mongoose;


const ObjectSchema = new Schema({

})
module.exports = mongoose.models.Object || mongoose.model('Object', ObjectSchema);



