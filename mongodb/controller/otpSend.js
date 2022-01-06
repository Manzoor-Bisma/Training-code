const express = require('express');
const app = express();
const otpSchema = require('../model/otp')
const studentSchema = require('../model/students')
var bodyParser = require('body-parser');
const mongoose = require('mongoose');


const email_send = async (req,res)=>{
    // console.log(req.body.email);
    // const {email}=req.body
    // const {email}= req.body

    const data = await studentSchema.findOne({email:req.body.email})

    // .then((result) => {
    //     res.status(201).json(result);
    // // console.log(result)

    // })
    // .catch(error =>{
    //     console.log(error)
    // } )
    console.log(data);
    
    const responseType = {};
    try{
        if (data){
            // responseType.statusText = " error present"
            // responseType.message = "  mail id not exists"
            let otpCode = Math.floor((Math.random()*10000) +1);
            let otpData = new  otpSchema({
                _id: new mongoose.Types.ObjectId(),
                email:req.body.email,
                code:otpCode,
                expireIn :new Date().getTime() + 300*10000
            })
            let otpResponse =  otpData.save();
            mailer(email,otpCode)
            responseType.statusText = " successfullllyyyy"
            responseType.message = " please check your mail id"
    
        }
        else{
            //  let otpCode = Math.floor((Math.random()*10000) +1);
            
            
            //  let otpData = new  otpSchema({
            //     _id: new mongoose.Types.ObjectId(),
            //     email:req.body.email,
            //     code:otpCode,
            //     expireIn :new Date().getTime() + 300*10000
            // })
            // let otpResponse =  otpData.save();
            // // mailer()
            // responseType.statusText = " successfullllyyyy"
            // responseType.message = " please check your mail id"
    
            responseType.statusText = " error present"
            responseType.message = "  mail id not exists"
        }
    res.status(200).json(responseType)

    }
    catch(error) {
        console.warn(error)
      }

}

const change_password = async (req,res) =>
{
    // res.status(200).json('password sent ok')
    let data = await otpSchema.find({
        email:req.body.email,
        code:req.body.otpCode
    });

    const responseType = {}
    {
        if (data)
        {
            let currentTime = new Date().getTime();
            let diff = data.expireIn - currentTime;

            if (diff<0)
            {
                response.message='token expire'
                response.statusText = ' error'
            }
            else
            {
                let  student = await  studentSchema.findOne({email:req.body.email})
                student.password =  req.body.password;
                await student.save();
                responseType.statusText = 'successful'
                responseType.message='password changes succesfully'
            }
        }
        else
        {
                responseType.message = "invalid otp",
                responseType.statusText = "error"
        }
    res.status(200).json(responseType);
    }    
    
}















const mailer = (email,otp) => {
    var nodemailer = require('nodemailer');
    var transporter = nodemailer.createTransport({
        service : 'gmail',
        port : 587,
        secure : false,
        auth:{
            user:'bisma.vibgyorweb@gmail.com',
            pass:'bismamanzoor1'
        }
    });

    var mailOptions = {
        from:'bisma.vibgyorweb@gmail.com',
        to:'bismahmanxoor1@gmail.com',
        subject:'sending email using node js mongo db',
         text:`${otp}`

    };

    transporter.sendMail(mailOptions, function(error,info){
        if(error)
        {
            console.log(error);
        }
        else
        {
            console.log('email sent:' + info.response)
        }
    });

}


module.exports ={
    email_send,
    change_password
}