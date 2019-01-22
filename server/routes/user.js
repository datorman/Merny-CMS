// load packages
var express = require('express')
var router = express.Router();

//Load middleware and models
var authenticate = require('./../middleware/authenticate');
var User = require('./../models/user');

// User me information
router.get('/me', authenticate ,(req, res) =>{
    res.send('User Me page/fetch user info')
});
// Route for user creation
router.post('/create', function (req, res) {
  res.send('user create route')
});
//User login
router.post('login', function(req, res){
    res.send('Login action path for user');
});
  
module.exports = router