var express = require('express');
var router = express.Router();
router.get('/pirat', function(req, res, next) {
 req.session.greeting = "Hi!!!";
 res.render('index', { title: 'Express' });
});
module.exports = router;