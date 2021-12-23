const express = require('express');
const app = express();
const mongoose = require('mongoose');
const user =require('./model/users')
// const userRoutes= require('./routers/userRoute')
const studentRoutes = require('./routers/studentRoute')
mongoose.connect('mongodb+srv://intern:xws38Q9jaga4xzWw@cluster0.drsaf.mongodb.net/MAVIE?retryWrites=true&w=majority',
    {
        useNewUrlParser:true,
        useUnifiedTopology:true
    }
);

// app.use('/users',userRoutes);
app.use('/students',studentRoutes);

app.listen(3700);

































// -------------------------1dec 25th vedio--
// .then(()=>{
//     console.warn("db connection successfully created");
// })
 

// ------------------;----------29th----------how to fetch data using api(2-dec) ------------------
// app.get('/users',function(req,res){
//     // user.find().select(`name`).then((result)=>{
//     user.find().then((result)=>{
//         res.status(201).json(result);
//     })
// })
               
// ---------------------28 vedio---------------
// user.find({},function(err,list){
//     if(err) console.warn(err);
//     console.warn(list);
// });


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