const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2024');


const sneaker = mongoose.model('pirat', { name: String });


const Nakama = new sneaker({ name: 'air force' });
Nakama.save().then(() => console.log('Приветсвую тебя накама!)'));