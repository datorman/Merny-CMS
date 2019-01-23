const express = require('express');
const bodyParser = require('body-parser');

var userRouter = require('./routes/user');

var app = new express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//Adding Routes for User
app.use('/user',userRouter)


app.listen(port, () => {
    console.log(`app running on port ${port}`);
});