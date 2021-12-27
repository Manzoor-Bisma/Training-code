const express = require('express')

// const authenticate = require('./Authentication')
const cookieAuth = require('./cookieAuth')

const auth=(cookieAuth, async(req,res)=>{
    console.log("On Login")
    res.send(req.user)
})

module.exports= {auth}