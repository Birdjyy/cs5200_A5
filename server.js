var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var server = express();

// view engine setup
server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'jade');

server.use(logger('dev'));
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(cookieParser());
server.use(express.static(path.join(__dirname, 'public')));

server.use('/', indexRouter);
server.use('/users', usersRouter);

// catch 404 and forward to error handler
server.use(function(req, res, next) {
  next(createError(404));
});

// error handler
server.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = server;

// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/cs5200-mongo');
// const testDao = require('./daos/testDao')
//
// testDao.createTest({name: '123'})
//     .then(name => {
//       console.log(name)
//       return testDao.findAllTests()
//     })
//     .then(a => {
//       console.log(a)
//     })
// testDao.findAllTests()
// const testSchema = mongoose.Schema({
//   name: String
// }, {collection: 'test'});
//
//
//
// const testModel = mongoose.model("TestModel", testSchema);
//
// testModel.create({name:'1111111'}).then(doc => testModel.find()
//     .then(tests => console.log(tests)));
//
// //testModel.find().then(tests => console.log(tests))
// //console.log(promise);

console.log("hello wordld")

const universityDao = require('./daos/university.dao.server')
// universityDao.truncateDatabase();
// universityDao.populateDatabase();