var express = require('express');
var router = express.Router();
router.post('/logreg', function(req, res, next) {
  var username = req.body.username
  var password = req.body.password
  console.log(username);
  console.log(password);
});

router.get('/logreg', function(req, res, next) {
 res.render('logreg',{title: 'Вход'});
 });
router.get('/', function(req, res, next) {
  res.render('index', { title: 'pirate2025' });
});


module.exports = router;
