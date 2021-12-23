const express = require('express')
const router = express.Router();
var bodyParser =require('body-parser') 
var jsonParser=bodyParser.json();
const studentPost = require('../controller/studentPost')
const studentGet = require('../controller/studentGet')
const studentDelete = require('../controller/studentDelete')
const studentEdit = require('../controller/studentEdit')
const studentGetById = require('../controller/studentGetById')
const studentLogin = require('../controller/studentLogin')
const otpSend = require('../controller/otpSend')

router.post('/register', jsonParser, studentPost.student_post)
router.get('/show', studentGet.student_get)
router.delete('/:id', studentDelete.student_delete)
router.get('/show/:id', studentGetById.StudentGetById)
router.put(`/edit/:id`, jsonParser, studentEdit.student_update)
router.post('/login', jsonParser,studentLogin.student_login )

router.post('/email-send',jsonParser, otpSend.email_send)
router.post('/change-password',jsonParser,otpSend.change_password)







module.exports=router;
