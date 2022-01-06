const express = require('express');
const app = express();
const mongoose = require('mongoose');
const user =require('./modules/users')
mongoose.connect('mongodb+srv://intern:xws38Q9jaga4xzWw@cluster0.drsaf.mongodb.net/MAVIE?retryWrites=true&w=majority',
    {
        useNewUrlParser:true,
        useUnifiedTopology:true
    }
)
.then(()=>{
    console.warn("db connection successfully created");
})
 


               
// ---------------------28 vedio---------------
// user.find({},function(err,list){
//     if(err) console.warn(err);
//     console.warn(list);
// });
const user_post = (req,res)=>{
    const data = new user({
        _id : new mongoose.Types.ObjectId(),
        name: req.body.name,
        address: req.body.address,
        email: req.body.email,
        gender: req.body.gender,
        age:req.body.age
    })
    // res.end(req.body.name);
    data.save().then((result)=>{
        res.status(201).json(result);
        console.warn("data added successfully in api")
    })
    .catch((error)=>console.warn(error)
    )
}


// ----------------29vedio-----------------                  
// const data = new user({
//     _id: new mongoose.Types.ObjectId(),
//     name:"jibran",
//     address:"lalchowk",
//     email:"jibran@yahoo.com",
//     gender:"male",
//     age:"23"
// })
// data.save().then((result)=>{
//     console.warn(result)
//     console.warn("collection created successfully")

// })
// .catch(err=>console.warn(err))