var express = require('express');
var createError = require('http-errors');
var router = express.Router();

const jwt = require('jsonwebtoken');
const cfg = require('../../config')

router.use('/sign', require('./sign'));
// router.use('/manage', require('./manage'))

//토큰확인
const verifyToken = (t) => {
  return new Promise((resolve, reject) => {
    jwt.verify(t, cfg.secretKey, (err, v) => {
      if (err) reject(err)
      resolve(v)
    })
  })
}

//미들웨어
router.all('*', function(req, res, next) {
  // 토큰 검사
  const token = req.headers.authorization
  verifyToken(token)
    .then(v => {
      console.log(v)
      next()
    })
    .catch(e => res.send({ success: false, msg: e.message }))
});

router.use('/test', require('./test'));
router.use('/user', require('./user'));




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



router.all('*', function(req, res, next) {
  next(createError(404, 'API를 찾을 수 없습니다.'));
});



module.exports = router;
