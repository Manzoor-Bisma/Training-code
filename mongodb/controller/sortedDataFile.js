const mongoose = require('mongoose')
const studentSchema = require('../model/students')



const Sorted_Data_File = async()=>{
    try{
        const data =  await studentSchema
        .find({}).select({name:1}).sort({name:1})
        console.log(data)
    }catch(err){
        console.log(err)
    }
}

Sorted_Data_File();


module.exports= {Sorted_Data_File}
