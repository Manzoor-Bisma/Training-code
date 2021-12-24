const express = require('express');
const app = express();
const studentSchema = require('../model/students')
// var bodyParser = require('body-parser');
// var jsonParser = bodyParser.json();
const mongoose = require('mongoose');
// var crypto = require ('crypto');
// var key = "password";
// var algo ="aes256";




const student_post = async (req, res) => {
    //  var cipher = crypto.createCipheriv(algo,key)
    //  var encrypted = cipher.update(req.body.password, 'utf8', 'hex');
    //  +cipher.final('hex');
    //  console.log(req.body.encrypted)
    //     try{
    //         const password = req.body.password;
    //         const cpassword = req.body.cpassword

    //         if(password === cpassword ){
    //        const data = new studentSchema({
    //         _id: new mongoose.Types.ObjectId(),
    //         name: req.body.name,
    //         email: req.body.email,
    //         address: req.body.address,
    //         phone:req.body.phone,
    //         branch:req.body.branch,
    //         password:req.body.password,
    //         cpassword:req.body.cpassword
    //         // password:encrypted,
    //         // cpassword:encrypted
    //     })
    //     // res.end(req.body.name);
    //     data.save().then((result) => {
    //         res.status(201).json(result);
    //         console.warn("data added successfully in api")
    //     })
    //     else{
    //         res.send("password mismatch")
    //     }
    //         .catch((error) => console.warn(error)
    //         )
    // }
    try {
        const password = req.body.password;
        const cpassword = req.body.cpassword;


        if (password === cpassword) {
            const data = new studentSchema({
                _id: new mongoose.Types.ObjectId(),
                name: req.body.name,
                email: req.body.email,
                address: req.body.address,
                phone: req.body.phone,
                branch: req.body.branch,
                // password: req.body.password,
                // cpassword: req.body.cpassword
                password:password,
                cpassword:cpassword
                // password:encrypted,
                // cpassword:encrypted
            })
             console.log("the sucess part:" + data)

            const token = await  data.generateAuthToken();
            console.log("the token part is:" + token )

            // const register = await regiterStudent.save();
            // res.status(201).render("succcesfully match");
            data.save().then((result) => {
                        res.status(201).json(result);
                        console.warn("data added successfully in api is:" + data)
                    })


        }
        else {
            res.send("password mis-match")
        }

    }
    catch (error) {
        res.status(400).send(error);
    }


}
module.exports = {

    student_post

}