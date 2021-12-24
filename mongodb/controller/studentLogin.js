const express = require('express')
const app = express();
const bcrypt = require('bcryptjs')
const studentSchema = require('../model/students')

const student_login =  (req, res) => {

    const {email,password}=req.body
    studentSchema.findOne({email:email}, async (err,user)=>
    {
        if(user){
            const check = await bcrypt.compare(password,user.password)

             const token = await  user.generateAuthToken();
             res.cookie("student jwt token", token, {httpOnly:true})
            console.log("the  login token part is:" + token )
            // if(password === user.password)
            if(check){
            res.send({message:"Login succesfully",user:user})
            }
            else{
                res.send({message:"password doesnt match"})
            }
        }
        else
        {
            res.send({message:"user not matched"})

        }


    } )
    //     const {email,password}=req.body

    //     const studentMail = await studentSchema.findOne({email:email})

    //   const check = await bcrypt.compare(password,studentMail.password)

    //   const token = await  data.generateAuthToken();
    //   console.log("the token part is:" + token )

    //   if(check){
    //             res.send({message:"Login succesfully",user:user})
    //             }
    //             else{
    //                 res.send({message:"password doesnt match"})
    // //             }





    // try {
    //     const { email, password } = req.body

    //     const studentMail = await studentSchema.findOne({ email: email })

    //     const check = await bcrypt.compare(password, studentMail.password)

    //     const token = await studentMail.generateAuthToken();
    //     console.log("the token part is:" + token)

    //     if (check)
    //     {
    //         res.send({ message: "Login succesfully", studentMail: studentMail })
    //     }
    //     else 
    //     {
    //         res.send({ message: "passwor invalid details" })
    //     }
    // }
    // catch (error) {
    //     res.status(400).send("invalid login details");
    // }
}
module.exports = {
    student_login
}
