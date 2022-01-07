
const mongoose =require('mongoose');


const product_Schema = new mongoose.Schema({
    name:{
        type: String
    },
    model:{
        type: String,
        trim: true
    },
    category_Id:{
        type :Number
    },
    price:{
        type: Number
    },
    description:{
        type: String
    },
    quantity:{
        type:Number,
        require:true,
        trim:true
    },

    image: {
        type: String,
        trim: true,
        required: true
    },
    color: {
        type: String,
        trim: true
    },
    size: {
        type: String,
        trim: true
    },


})


module.exports= mongoose.model('Productschema',product_Schema)


