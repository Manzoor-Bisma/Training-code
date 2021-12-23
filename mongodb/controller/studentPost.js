const express = require('express');
const app = express();
const studentSchema = require('../model/students')
var bodyParser = require('body-parser');
// var jsonParser = bodyParser.json();
const mongoose = require('mongoose');
var crypto = require ('crypto');
var key = "password";
var algo ="aes256";




const student_post = (req, res) => {
     var cipher = crypto.createCipher(algo,key)
     var encrypted = cipher.update(req.body.password, 'utf8', 'hex');
     +cipher.final('hex');
     console.log(req.body.encrypted)
    const data = new studentSchema({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        email: req.body.email,
        address: req.body.address,
        phone:req.body.phone,
        branch:req.body.branch,
        password:encrypted,
        cpassword:encrypted
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

    student_post

}