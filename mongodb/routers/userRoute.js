const express = require('express')
const router = express.Router();
const userGet = require('../controller/userGet')
const userPost = require('../controller/userPost')
const userPut = require('../controller/userPut')
const userDelete = require('../controller/userDelete')
const userSearch = require('../controller/userSearch')
const userOperators = require('../controller/userOperators')
var bodyParser =require('body-parser') 
var jsonParser=bodyParser.json();





router.get('/get', userGet.user_get);
router.post('/post', jsonParser, userPost.user_post)
router.put('/:id',jsonParser, userPut.user_update)
router.delete('/:id', userDelete.user_delete)
router.get('/:name', userSearch.user_search)
router.get('/less', userGet.user_less)
router.get('/and', userGet.user_andOp)
router.get('/equal', userGet.user_equal)
router.get('/greater', userGet.user_greater)
router.get('/lt', userOperators.user_ltThan)



module.exports=router;