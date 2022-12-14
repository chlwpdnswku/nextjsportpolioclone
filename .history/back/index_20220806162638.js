const express = require('express');
const dotenv = require('dotenv');
const app = express();
const sequelize = require('sequelize');

// sequelize

dotenv.config();

app.get('/', function (req, res) {
  res.send('hello NodeJs');
});
app.listen(3002, () => console.log('3002번 포트 대기'));
