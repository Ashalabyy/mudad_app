
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    name : {
        type: String,

        required:true,
    },
    email : {
        type: String,

        required:true,
    },
    password : {
        type: String,

        required:true,
    },
    phoneNumber : {
        type: String,

        required:true,
    },
    verificationCode: {
        type:String,
       },
    orders:[{
        id:String,

        usertId:String,
        
        location: String,

        total:Number,

        
        products:[{
            id:String,
    
            imageUrl:String,
            
            price: Number,
    
            qty: Number,
    
          }],
    }],
 
 
});

module.exports = mongoose.model('Users',userSchema); 

