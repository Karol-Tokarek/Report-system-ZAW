const express = require('express');
const sendEmail = require('./email.js');
var cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
app.use(cors());
app.use(bodyParser.json());


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
    });
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/emailSend', (req, res) => {
  const { emailNadawcy, emailOdbiorcy, tresc } = req.body;
  sendEmail("karolexigierus@gmail.com",emailOdbiorcy, tresc);
  res.send('Email sent successfully');
});

app.listen(3001, () => {
  console.log('Server started on port 3001');
});