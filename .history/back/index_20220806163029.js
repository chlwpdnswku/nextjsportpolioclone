const express = require('express');
const dotenv = require('dotenv');
const app = express();
const sequelize = require('./models/index');

sequelize
  .sync({ force: false })
  .then(() => {
    console.log('데이터 연결 성공');
  })
  .catch((e) => {
    console.error(e);
  });

dotenv.config();

app.get('/', function (req, res) {
  res.send('hello NodeJs');
});
app.listen(3002, () => console.log('3002번 포트 대기'));
