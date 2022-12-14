const express = require('express');
const dotenv = require('dotenv');
const app = express();
const sequelize = require('./models/index');
const cookieParser = require('cookie-parser');
const session = require('express-session');

// cookie
app.use(cookieParser(process.env.COOKIE_SECRET));
// sessio local
app.use(
  session({
    resave: false, // false 고정
    saveUninitialized: false, // false 고정
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true, // 항상 true(자바스크립트로 진입 불가 - XXS 공격 방지)
    },
    // name의 기본값 - connect_sid
  })
);

// sequelize
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
