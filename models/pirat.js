// models/pirat.js
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var planeSchema = new Schema({
  title: String,
  nick: {
    type: String,
    unique: true,
    required: true,
  },
  avatar: String,
  desc: String,
  created: {
    type: Date,
    default: Date.now,
  },
});

// Экспортируем модель как свойство Pirat
module.exports.Pirat = mongoose.model("pirat", planeSchema);
