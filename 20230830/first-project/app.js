var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// ejs 추가 코드
const templateRouter = require('./routes/template');


//session 추가 코드
const session = require("express-session");


var app = express();


// session 추가 코드
app.use(session({
  // 시크릿은 세션을 암호화하기 위해 필요
  // 안의 값은 임의로 지정
  secret: "first project",
  resave : false,
  saveUninitalized : true,

  // resave 세션을 변경하지 않아도 저장할지 말지 정해주는것
  // false 변경되지 않았을 때 저장하지 않는다.
  // saveUninitalized 세션을 저장하기 전에 이를 초기화할지 말지 정해주는 것
})
);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// 미들웨어
// app.use((req, res, next) => {
//   console.log("middleware!!");
//   next();
// });

app.use('/', indexRouter);
app.use('/users', usersRouter);

// ejs 추가 코드
app.use('/template', templateRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
