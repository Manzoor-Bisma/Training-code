
const express = require('express');
const app = express();
const user = require('../model/users')



const user_gtThan =(req,res)=>{
    user.find({age:{$gt : 20}})
    .then((result)=>{
        res.json(result)
    }).catch((err)=>{
        console.log(err)
    })
}

const user_ltThan =(req,res)=>{
    user.find({age:{$lt : 22}})
    .then((result)=>{
        res.json(result)
    }).catch((err)=>{
        console.log(err)
    })
}

const user_eqThan =(req,res)=>{
    user.find({age:{$eq : 10}})
    .then((result)=>{
        res.json(result)
    }).catch((err)=>{
        console.log(err)
    })
}

const user_neThan =(req,res)=>{
    user.find({age:{$ne : 18}})
    .then((result)=>{
        res.json(result)
    }).catch((err)=>{
        console.log(err)
    })
}

const user_andOp =(req,res)=>{
    user.find({$and : [{age:{$eq:22}}, {address:{$eq:"eidgah"}}]})
    .then((result)=>{
        res.json(result)
    }).catch((err)=>{
        console.log(err)
    })
}

const user_notOp =(req,res)=>{
    user.find({address:{$not:{$eq:"soura"}}})
    .then((result)=>{
        res.json(result)
    }).catch((err)=>{
        console.log(err)
    })
}

const user_regex=(req,res)=>{
    user.find({name:{$regex:"$h", $options:'i'}})
    .then((result)=>{
        res.json(result)
    })
    .catch((err)=>{
        console.log(err)
    })
}






module.exports= {
    user_gtThan, 
    user_ltThan,
    user_eqThan,
    user_neThan,
    user_andOp,
    user_notOp,
    user_regex,
    // eleMatch
}