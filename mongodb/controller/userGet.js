const express = require('express');
const app = express();
const user = require('../model/users')
// var bodyParser = require('body-parser');
// const mongoose = require('mongoose');


const user_get = (req, res) => {
    user.find()
    .then((result) => {
        res.status(201).json(result);
    })
    .catch((error) => console.warn(error)
    )
}

const user_less = (req, res) => {
    user.find( {age: { $lte:10} })
    .then((result) => {
        res.status(201).json(result);
    })
    .catch((error) => console.warn(error)
    )
}
const user_equal = (req, res) => {
    user.find( {age: { $eq:10} })
    .then((result) => {
        res.status(201).json(result);
    })
    .catch((error) => console.warn(error)
    )
}
const user_greater = (req, res) => {
    user.find( {age: { $lte:10} })
    .then((result) => {
        res.status(201).json(result);
    })
    .catch((error) => console.warn(error)
    )
}
const user_andOp =(req,res)=>{
    user.find({$and : [{age:{$eq:20}}, {address:{$eq:"eidgah"}}]})
    .then((result)=>{
        res.json(result)
    }).catch((err)=>{
        console.log(err)
    })
}

module.exports = {
    user_get,
    user_less,
    user_greater,
    user_equal,
    user_andOp
}