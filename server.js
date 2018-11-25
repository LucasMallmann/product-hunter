const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi', 
  {useNewUrlParser: true}
);

app.get('/', (req, res) => {
  res.send('Hello RocketSeat 2');
});

console.log('Server is listening on port ',3001);

app.listen(3001);