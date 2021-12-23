const express = require('express');
const app = express();
const user = require('../model/users')
var bodyParser = require('body-parser');
const mongoose = require('mongoose');



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
module.exports = {

    user_post

}