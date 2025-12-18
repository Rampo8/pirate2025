var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'pirate2025' });
});
router.get('/logreg', function(req, res, next) {
 res.render('logreg',{title: 'Вход'});
 });

module.exports = router;
