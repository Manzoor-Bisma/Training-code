const express = require('express')
const router = express.Router()
const user_add= require('../controller/user/user_Add')
const user_get= require('../controller/user/user_Get')
const user_delete= require('../controller/user/user_Del')
const user_login=require('../controller/user/user_Login')
const user_logout = require('../controller/user/user_Logout')

router.post('/adduser', user_add.user_Add)
router.get('/getuser', user_get.user_Get)
router.post('/deleteuser', user_delete.user_Delete)
router.post('/loginuser', user_login.user_Login )
router.get('/logoutuser', user_logout.user_Logout )
router.post('/user-refresh-token', user_add.refreshToken)




