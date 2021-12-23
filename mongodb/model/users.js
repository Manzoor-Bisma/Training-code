
const mongoose = require('mongoose');
let userSchema = new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name: String,
    address :String,
    email : String,
    gender : String,
    age: String
});
module.exports=mongoose.model('users',userSchema);