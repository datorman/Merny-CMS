// load packages
const express = require('express');
const _ = require('lodash');
var userRouter = express.Router();

//Load middleware and models
var {authenticate} = require('./../middleware/authenticate');
var {User} = require('./../models/user');

// User me information
userRouter.get('/me', authenticate, (request,response) => {
    response.send(request.user);
});
// Route for user creation
userRouter.post('/create', (req,resp) => { 
    var body = _.pick(req.body,['email','password']); 
    var user = new User({
        email: body.email,
        password: body.password
    });
    user.save().then(() => {
        return user.generateAuthToken();
    }).then((token) => {
        resp.header('x-auth',token).send({user})
    }).catch((e)=> {
        resp.status(400).send(e);
    });
});
// Function to handle token deleteion/logout essentially
userRouter.delete('/me/token', authenticate, (request, response) => {
    request.user.removeToken(request.token).then(() =>{
        response.status(200).send();
    }, () =>{
        response.status(400).send();
    });
});
//User login
userRouter.post('login', (req, res) => {
    res.send('Login action path for user');
});
  
module.exports =  userRouter;