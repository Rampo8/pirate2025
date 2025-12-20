// middlewares/createMenu.js - самое простое исправление
module.exports = async function (req, res, next) {
  try {
    // ИСПРАВЛЕНО: используем .pirat вместо .Pirat
    const Pirat = require("../models/pirat").pirat;
    
    res.locals.nav = [];
    const menu = await Pirat.find({}, { _id: 0, title: 1, nick: 1 });
    
    if (menu && menu.length > 0) {
      res.locals.nav = menu;
    }
    
    next();
  } catch (error) {
    console.error("Ошибка в createMenu:", error.message);
    res.locals.nav = [];
    next();
  }
};