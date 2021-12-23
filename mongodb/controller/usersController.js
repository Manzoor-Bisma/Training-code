const express = require('express');
const app = express();
const user = require('../modules/users')
var bodyParser = require('body-parser');
const mongoose = require('mongoose');




const user_get = (req, res) => {
    user.find().then((result) => {
        res.status(201).json(result);
    })
}



const user_post = (req, res) => {
    const data = new user({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        address: req.body.address,
        email: req.body.email,
        gender: req.body.gender,
        age: req.body.age
    })
    // res.end(req.body.name);
    data.save().then((result) => {
        res.status(201).json(result);
        console.warn("data added successfully in api")
    })
        .catch((error) => console.warn(error)
        )
}
const user_update = (req, res) => {
    user.updateOne(
        { _id : req.params.id },
        { $set: {
             name: req.body.name, 
             email: req.body.email, 
             age: req.body.age 

            } }
            ).then((result) => {
            res.status(201).json(result)
        })
        .catch((error) => console.warn(error)
        )
}

const user_delete = (req, res) => {
    user.deleteOne({ _id: req.params.id })
        .then((result) => {
            res.status(200).json(result)
        })
        .catch((error) => console.warn(error))
}

module.exports = {
    user_get,
    user_post,
    user_delete,
    user_update
}