const Users = require('../../model/User_Model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const user_Get=async(req,res)=>{
    try {
        const user = await Users.findById(req.user.id).select('password')
        if(!user){
            return res.status(500).json({message:"Oopps.... this user does not exists"})

        }
        else{
            return res.json(user)
        }
    } catch (error) {
        return res.status(500).json({error: err.message})
        
    }
}

module.exports={user_Get}


