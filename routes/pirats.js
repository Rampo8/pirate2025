var express = require('express');
var router = express.Router();
var Cat = require('../models/pirat').Cat;
var checkAuth = require("../middlewares/checkAuth.js");
/* Страница пирата */
router.get("/:nick", checkAuth, async function(req, res, next) {

  try {
    // Пробуем загрузить модель разными способами
    let PiratModel;
    
    try {
      const piratModule = require('../models/pirat');
      
      // Проверяем разные варианты экспорта
      if (piratModule.pirat && typeof piratModule.pirat.find === 'function') {
        PiratModel = piratModule.pirat;
      } else if (piratModule.Pirat && typeof piratModule.Pirat.find === 'function') {
        PiratModel = piratModule.Pirat;
      } else if (typeof piratModule.find === 'function') {
        PiratModel = piratModule;
      } else {
        throw new Error("Модель не найдена в модуле");
      }
    } catch (error) {
      console.error("Ошибка загрузки модели:", error.message);
      return res.status(500).send("Ошибка сервера: модель не загружена");
    }
    
    console.log("Поиск пирата с ником:", req.params.nick);
    
    // Ищем пирата
    const pirats = await PiratModel.find({nick: req.params.nick});
    console.log("Найдено записей:", pirats.length);
    
    if(!pirats.length) {
      console.log("Пират не найден:", req.params.nick);
      return next(new Error("Нет такого пирата в One piece"));
    }
    
    // Берем первого найденного пирата
    const foundPirat = pirats[0];
    console.log("Найден пират:", foundPirat);
    
    // Рендерим страницу с данными пирата
    res.render('pirat', {
      title: foundPirat.title,
      picture: foundPirat.avatar,
      desc: foundPirat.desc
    });
    
  } catch (error) {
    console.error("Ошибка в роутере /:nick:", error.message);
    return next(error);
  }
});

module.exports = router;