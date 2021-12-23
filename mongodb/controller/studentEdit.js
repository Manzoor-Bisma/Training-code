const express = require('express');
const app = express();
const studentSchema = require('../model/students')
var bodyParser = require('body-parser');
const mongoose = require('mongoose');


const student_update = (req, res) => {
    studentSchema.updateOne(
        { _id : req.params.id },
        { $set:
            {
             name: req.body.name, 
             email: req.body.email, 
             address: req.body.address,
             phone: req.body.phone,
             branch:req.body.branch,
             password : req.body.password,
             cpassword : req.body.cpassword 

            }
        }
            ).then((result) => {
            res.status(201).json(result)
        })
        .catch((error) => console.warn(error)
        )
}


module.exports = {
   student_update
}