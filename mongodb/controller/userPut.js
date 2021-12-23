const express = require('express');
const app = express();
const user = require('../model/users')
var bodyParser = require('body-parser');
const mongoose = require('mongoose');


const user_update = (req, res) => {
    user.updateOne(
        { _id : req.params.id },
        { $set:
            {
             name: req.body.name, 
             email: req.body.email, 
             address: req.body.address,
             age: req.body.age 

            }
        }
            ).then((result) => {
            res.status(201).json(result)
        })
        .catch((error) => console.warn(error)
        )
}


module.exports = {
    user_update
}