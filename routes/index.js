var express = require('express');
var router = express.Router();

/* Страница Luffy*/
router.get('/Luffy', function(req, res, next) {
    res.send("<h1>Страница Monkey D Luffy</h1>")
});
/* Страница Roger */
router.get('/Roger', function(req, res, next) {
    res.send("<h1>Страница Gold D Roger</h1>")
});

/* Страница Ace */
router.get('/Ace', function(req, res, next) {
    res.send("<h1>Страница Porgas D Ace </h1>")
});

module.exports = router;
