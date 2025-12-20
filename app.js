var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var MongoStore = require("connect-mongo").MongoStore;
var session = require("express-session");

// ПОДКЛЮЧЕНИЕ К БАЗЕ ДАННЫХ В САМОМ НАЧАЛЕ
mongoose.connect("mongodb://localhost/pirat2025")
  .then(() => console.log("MongoDB подключена"))
  .catch(err => console.error("Ошибка MongoDB:", err));

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var indexPlanes = require("./routes/pirats");

var app = express();

// view engine setup
app.engine("ejs", require("ejs-locals"));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// Сессии
app.use(
  session({
    secret: "One piece",
    cookie: { maxAge: 60 * 1000 },
    proxy: true,
    resave: true,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: "mongodb://localhost/pirat2025" }),
  })
);

app.use(function (req, res, next) {
  req.session.counter = req.session.counter + 1 || 1;
  next();
});

// ПОДКЛЮЧЕНИЕ middleware ПОСЛЕ всех настроек
app.use(require("./middlewares/createMenu.js"));
app.use(require("./middlewares/createUser.js"))
// Маршруты
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/pirat", indexPlanes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  res.status(err.status || 500);
  res.render("error", { title: "One piece" });
});

module.exports = app;