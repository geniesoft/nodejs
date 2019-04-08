var createError = require('http-errors')
var express = require('express');
var router = express.Router();

router.get('/users', function(req, res, next) {
  res.send({ a : 1 })
});

router.post('/users', function(req, res, next) {
  res.send({ a : 1 })
});

router.use('/test', require('./test'));
router.use('/user', require('./user'));


/* GET home page. */
router.all('*', function(req, res, next) {
  next(createError(404,'API를 찾을 수 없습니다.'));
});

module.exports = router;
