const express = require('express');
const app = express();
const user = require('../model/users')
var bodyParser = require('body-parser');
const mongoose = require('mongoose');


const user_search =(req,res)=>{
    var regex = new RegExp(req.params.name,'i');
    user.find({name:regex})
    .then((result)=>{
        res.status(200).json(result)
    })
    .catch((error) => console.warn(error)
    )
}
module.exports = {

    user_search

}