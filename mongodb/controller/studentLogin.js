const express=require('express')
const app = express();
const bcrypt = require('bcryptjs')
const studentSchema = require('../model/students')

const student_login = (req, res) => {

    const {email,password}=req.body
    studentSchema.findOne({email:email}, async (err,user)=>
    {
        if(user){
            const check = await bcrypt.compare(password,user.password)
            // if(password===user.password)
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
   
} 
module.exports = {
    student_login
 }
