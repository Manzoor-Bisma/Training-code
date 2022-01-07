const express = require('express');
const app = express();
const mongoose = require('mongoose');
const user_Routes = require('../Routes/userRoutes')

mongoose.connect('mongodb+srv://intern:xws38Q9jaga4xzWw@cluster0.drsaf.mongodb.net/MAVIE?retryWrites=true&w=majority',
    {
        useNewUrlParser:true,
        useUnifiedTopology:true
    }
);


app.use('/users',user_Routes);






app.listen(7700,()=>{
    console.log(" Current port is running at 7700")
});

