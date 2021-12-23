const express = require('express');
const app = express();
const studentSchema = require('../model/students')
var bodyParser = require('body-parser');
const mongoose = require('mongoose');

const student_delete = (req, res) => {
    studentSchema.deleteOne({ _id: req.params.id })
        .then((result) => {
            res.status(200).json(result)
        console.log("deleted successfully")

        })
        .catch((error) => console.warn(error))
}

module.exports = {
    student_delete
}