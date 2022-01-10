const Users = require('../../model/User_Model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const user_Logout=async(req,res)=>{
    try {
        res.clearCookie('refreshtoken',{path:'/refreshToken'})
        return res.json({message:"You have been logged Out"})
    } catch (err) {
        return res.status(500).json({error: err.message})
        
    } 
}

module.exports={user_Logout}