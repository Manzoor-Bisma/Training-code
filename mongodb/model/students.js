const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')
const studentSchema = new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:{
        type:String,
        required:true,
        default:false
    },
    email:{
        type:String,
        required:true,
        default:false
    },
    address:{
        type:String,
        required:true,
        default:false
    },
    phone:{
        type:Number,
        required:true,
        default:false
    },
    branch:{
        type:String,
        required:true,
        default:false
    },
    password:{
        type:String,
        required:true,
        default:false
    },
    cpassword:{
        type:String,
        required:true,
        default:false
    },
    code:{
        type:String,
        required:true,
        default:false
    },
    expireIn:{
        type:Number,
        required:true,
        default:false
    },
    // name: String,
    // email: String,
    // address:String,
    // phone:Number,
    // branch:String,
    // password:String,
    // cpassword:String
});
studentSchema.pre('save', async function(next){
   
    
       this.password = await bcrypt.hash(this.password,10);
       
       this.cpassword = await bcrypt.hash(this.cpassword,10);
       
    next()
    
}) 
module.exports=mongoose.model('students',studentSchema);