var express = require('express');
var router = express.Router();
var pirat = require('../models/pirat').pirat;
var checkAuth = require("../middlewares/checkAuth.js");
/* Страница Корабль */
router.get("/:nick", checkAuth, async function(req, res, next) {
   var pirats = await pirat.find({nick: req.params.nick});
   console.log(pirats)
   if(!pirats.length) return next(new Error("Нет такого пирата в One piece"))
       var pirat = pirat[0];
       res.render('pirat', {
           title: pirat.title,
           avatar: pirat.avatar,
           desc: pirat.desc
       })
});



module.exports = router;