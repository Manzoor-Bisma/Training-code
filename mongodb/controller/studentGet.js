const express = require('express');
const app = express();
const studentSchema = require('../model/students')

const student_get = (req, res) => {
    studentSchema.find({}).select({}).sort({name:1})
    .then((result) => {
        res.status(201).json(result);
        // console.log(result);
        console.log("list has been sorted, please check  ur list");

    })
    .catch((error) => console.warn(error)
    )
}

// const Sorted_Data_File = async()=>{
//     try{
//         const data =  await studentSchema
//         .find({}).select({name:1}).sort({name:1})
//         // console.log(data)
//         console.log("list has been sorted, please check on ur app")

//     }catch(err){
//         console.log(err)
//     }
// }

// Sorted_Data_File();

module.exports = {
    student_get
    // Sorted_Data_File

}