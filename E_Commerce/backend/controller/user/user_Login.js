const Users = require('../../model/User_Model')
const bcrypt = require('bcryptjs')

const user_Login=async(req,res)=>{
    try {
        const {email,password}= req.body

        const user = await Users.findOne({email})

        if(!user){
            return res.status(400).json({message:"this user does not exists"})
        }else{
            const isMatch = await bcrypt.compare(password,user.password)
            if(!isMatch){
                return res.status(400).json({message:"incorrect password"})
            }else{
                return res.status(200).json({message:"user loggged in sucessful password"})
            }
        }

        
    } catch (error) {
        return res.status(500).json({error: err.message})
        
    }
}

module.exports={user_Login}
