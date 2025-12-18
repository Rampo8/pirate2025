const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2024');
var pirat = require('./models/pirat.js').pirat
var pirat = new pirat({
   title: "Luffy",
   nick: "Luffy"

})
pirat.save();