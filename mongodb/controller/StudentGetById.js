const studentSchema = require('../model/students')

const StudentGetById=(req,res)=>{

    studentSchema.findOne({_id:req.params.id}).then((user)=>{
        res.json(user);
    })
}


module.exports= {
    StudentGetById
}