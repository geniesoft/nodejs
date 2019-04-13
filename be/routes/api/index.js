var express = require('express');
var createError = require('http-errors');
var router = express.Router();

/* GET home page. */
router.get('/hello', function(req, res, next) {
  res.send({ msg: 'hello', a: 1 })
});

router.get('/users', function(req, res, next) {
  res.send({ msg: 'hello', a: 1 })
});
router.post('/users', function(req, res, next) {
  res.send({ msg: 'hello', a: 1 })
});

router.use('/test', require('./test'));
router.use('/user', require('./user'));

router.all('*', function(req, res, next) {
  next(createError(404, 'API를 찾을 수 없습니다.'));
});

module.exports = router;