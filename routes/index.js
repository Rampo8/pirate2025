var express = require('express');
var User = require('../models/user').User;
var router = express.Router();
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express", counter: req.session.counter });
});

router.get("/logreg", function (req, res, next) {
  res.render("logreg", { title: "Вход", error: null });
});

/* POST login/registration page. */
router.post("/logreg", async function (req, res, next) {
  var username = req.body.username;
  var password = req.body.password;
  console.log(username);
  console.log(password);
  var users = await User.find({ username: username });
  console.log(users);
  if (!users.length) {
    //res.send("<h1>Пользователь НЕ найден</h1>");
    var user = new User({ username: username, password: password });
    await user.save();
    req.session.user_id = user._id;
    res.redirect("/");
  } else {
    //res.send("<h1>Пользователь найден</h1>");
    var foundUser = users[0];
    if (foundUser.checkPassword(password)) {
      req.session.user_id = foundUser._id;
      res.redirect("/");
    } else {
      res.render("logreg", { title: "Вход", error: "Пароль не верный" });
    }
  }
});
/* POST logout. */

router.post("/logout", function (req, res, next) {
  req.session.destroy();
  res.locals.user = null;
  res.redirect("/");
});
module.exports = router;
