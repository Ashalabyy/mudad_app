
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const orderSchema = new Schema({
    createdAt: {
type:String,
required:true,
    },
    userId: {
        type:Schema.Types.ObjectId,
        ref: 'Users'
      },
     
    products:[{
        id:String,

        imageUrl:String,
        
        price: Number,

        qty: Number,

          }],
    location:{
        type:String,

        required:true,
    },

    total: {
        type:Number,

        required:true,
    }
 
});

module.exports = mongoose.model('Orders',orderSchema); 