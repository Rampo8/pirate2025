const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/pirate2025');
var pirats = require('./models/pirats').pirat
var pirat = new Pirat({
   title: "luffy",
   nick: "luffy",
})
pirat.save();
var schema = mongoose.Schema({ name: String })
const pirate = mongoose.model('pirat', { name: String });
schema.methods.meow = function(){
   console.log(this.name + " сказал Привет")
}
const kitty = new pirat({ name: 'Zoro' });
kitty.save().then(() => console.log('Onigiri'));
