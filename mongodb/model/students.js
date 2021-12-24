const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt  = require('jsonwebtoken');
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
    tokens:[{
        token:{
            type:String,
            required:true
        }
    }]
    // name: String,
    // email: String,
    // address:String,
    // phone:Number,
    // branch:String,
    // password:String,
    // cpassword:String
});

studentSchema.methods.generateAuthToken = async function(){
    try{
        const token = jwt.sign({_id:this._id.toString()},"iwanttobecomeawebdeveloperinqatardubai")
        this.tokens =  await this.tokens.concat({token:token})
        await this.save();
        // console.log(token);
        return token;
    }catch(error){
            // res.send("error is:" + error);
            console.log("error is:" + error);

    }

}

// converting password  into hash 
studentSchema.pre('save', async function(next){
   
    
    //    this.password = await bcrypt.hash(this.password,10);
       
    //    this.cpassword = await bcrypt.hash(this.cpassword,10);
       
    // next()
    if(this.isModified("password"))
    {
        console.log(`the current password is  ${this.password}`);

       this.password = await bcrypt.hash(this.password,10);

       console.log(`the current password is  ${this.password}`);

       this.cpassword = undefined;

    }
     next()
    
}) 
module.exports=mongoose.model('students',studentSchema);