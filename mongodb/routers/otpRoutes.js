const express = require('express')
const router = express.Router();
var bodyParser =require('body-parser') 
var jsonParser=bodyParser.json();
const otpSend = require('../controller/otpSend')
// const otpSend = require('../controller/otpSend')


router.post('/email-send',jsonParser, otpSend.email_send)
router.post('/change-password',jsonParser,otpSend.change_password)

module.exports=router;
