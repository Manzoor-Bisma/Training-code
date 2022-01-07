const Users = require('../../model/User_Model')
const mongoose = require('mongoose');

const add_User = async (req, res) => {
    


    try {
        const user= await Users.findOne({email:req.body.email})

        if(user){
            return res.status(400).json({message:"Oops!.....This email already exists"})
        }else{

            
            const password = req.body.password;
            const confirm_Password = req.body.confirm_Password;

            if(password.lenght<8){
                return res.status(400).json({message:"Password must be atleast 8 characters long"})
            }else{

                if (password === confirm_Password) {
                    const data = new user({
                    name: req.body.name,
                    email: req.body.email,
                    userName: req.body.userName,
                    password:password,
                    confirm_Password:confirm_Password
                    
                })
              
    
               
                data.save().then((result) => {
                    res.status(201).json(result);
                    console.warn("Data added successfully in api is:" + data)
                })
    
    
            }
            else {
                res.send("password mis-match")
            }
    
            }

            
        }
        
    }
    catch (error) {
        res.status(400).send(error);
    }


}

module.exports={add_User}