const express = require('express');
const app = express();
const user = require('../model/users')
var bodyParser = require('body-parser');
const mongoose = require('mongoose');


const user_delete = (req, res) => {
    user.deleteOne({ _id: req.params.id })
        .then((result) => {
            res.status(200).json(result)
        })
        .catch((error) => console.warn(error))
}

module.exports = {
    user_delete
   
}