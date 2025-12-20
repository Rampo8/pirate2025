var User = require("../models/user").User;

module.exports = async function(req, res, next) {
  // Инициализируем user как null
  res.locals.user = null;
  
  try {
    // Проверяем, есть ли user_id в сессии
    if (!req.session.user_id) {
      console.log("Нет user_id в сессии");
      return next();
    }
    
    console.log("Поиск пользователя с ID:", req.session.user_id);
    
    // Ищем пользователя по ID
    // findById возвращает ОДИН документ или null, НЕ массив
    var user = await User.findById(req.session.user_id);
    
    if (user) {
      console.log("Пользователь найден:", user.username || user.email);
      res.locals.user = user;
    } else {
      console.log("Пользователь не найден в базе данных");
      // Очищаем невалидную сессию
      req.session.user_id = null;
    }
    
    next();
  } catch (error) {
    console.error("Ошибка в createUser middleware:", error.message);
    // В случае ошибки продолжаем без пользователя
    next();
  }
};