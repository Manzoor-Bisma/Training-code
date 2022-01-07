const User = require('../../model/User_Model')


const user_Delete =(req,res)=>{
    
    User.deleteOne({_id:req.params.id}).then((result)=>{
        res.json(result)
        console.log("user deleted successfully")
    })

    .catch(err=>{
        console.log(err)
    })
}

module.exports={user_Delete}
