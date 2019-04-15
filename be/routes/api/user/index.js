var express = require('express');
var createError = require('http-errors');
var router = express.Router();

router.get('/', function(req, res, next) {
  const us = [
    {
      name: '테스트1',
      age: 14
    },
    {
      name: '테스트2',
      age: 24
    }
  ]
  res.send({ users: us })
});


  res.send({ success: true, msg: 'post ok' })
router.all('*', function(req, res, next) {
  next(createError(404, 'API를 찾을 수 없습니다.'));
});

module.exports = router;
