const express = require('express');
const bodyParser = require('body-parser');

var app = new express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/api/hello', (req, res) => {
    res.send({ express: 'Hello From Express' });
  });
  app.post('/api/world', (req, res) => {
    console.log(req.body);
    res.send(
      `I received your POST request. This is what you sent me: ${req.body.post}`,
    );
  });

app.listen(port, () => {
    console.log(`app running on port ${port}`);
});