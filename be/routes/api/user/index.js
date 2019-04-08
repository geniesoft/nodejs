var createError = require('http-errors')
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  const us = [
    {
      name: '김도현',
      age: 20
    },
    {
      name: '김지니',
      age:27
    }
  ]
  res.send({ users  : us })
});

router.get('/', function(req, res, next) {
  res.send({users:us})
});

router.post('/', function(req, res, next) => {
  res.send({success:true})
});

router.put('/', function(req, res, next) => {
  res.send({success:true})
});

router.delete('/', function(req, res, next) => {
  res.send({success:true})
});



/* GET home page. */
router.all('*', function(req, res, next) {
  next(createError(404,'API를 찾을 수 없습니다.'));
});

module.exports = router;
