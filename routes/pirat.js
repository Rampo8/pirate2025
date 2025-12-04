var express = require('express');
var router = express.Router();
var pirat = require('../models/pirats').pirat;

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Новый маршрутизатор, для маршрутов, начинающихся с pirats');
});
/* Страница Корабль */
router.get("/:nick", async function(req, res, next) {
   var pirats = await pirat.find({nick: req.params.nick});
   console.log(pirats)
   if(!pirats.length) return next(new Error("Нет такого пирата в One piece"))
       var pirat = pirats[0];
       res.render('pirat', {
           title: pirat.title,
           picture: pirat.avatar,
           desc: pirat.desc
       })
});



module.exports = router;