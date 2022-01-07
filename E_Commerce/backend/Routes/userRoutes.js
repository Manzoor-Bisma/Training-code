const express = require('express')
const router = express.Router()
const user_add= require('../controller/user/user_Add')
const user_get= require('../controller/user/user_Get')
const user_delete= require('../controller/user/user_Del')

router.post('/adduser', add.add_User)
router.get('/getuser', add.user_get)
router.post('/deleteuser', add.user_delete)
