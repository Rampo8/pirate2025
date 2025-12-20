var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'pirate2025' });
});

router.get('/logreg', function(req, res, next) {
 res.render('logreg',{title: 'Вход'});
 });
router.post("/logreg", function (req, res, next) {
  var username = req.body.username;
  var password = req.body.password;
  console.log(username);
  console.log(password);
});
module.exports = router;