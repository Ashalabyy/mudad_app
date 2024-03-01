
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const serviceSchema = new Schema({
    title : {
        type: String,

        required:true,
    },
    ImageUrl : {
        type: String,

        required:true,
    }
 
});

module.exports = mongoose.model('Services',serviceSchema); 
