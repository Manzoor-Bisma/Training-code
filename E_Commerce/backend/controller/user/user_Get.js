const Users = require('../../model/User_Model')


const user_Get=(req,res)=>{

    Users.find().then((user)=>{
        res.json(user)
    })
}


module.exports= {user_Get}



