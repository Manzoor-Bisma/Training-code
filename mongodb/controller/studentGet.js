const express = require('express');
const app = express();
const studentSchema = require('../model/students')

const student_get = (req, res) => {
    studentSchema.find()
    .then((result) => {
        res.status(201).json(result);
        console.log(result);
    })
    .catch((error) => console.warn(error)
    )
}
module.exports = {
    student_get
}