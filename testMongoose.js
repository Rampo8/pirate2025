const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2024');

const Schema = new mongoose.Schema({ 
  name: String 
});

Schema.methods.show = function () {
  console.log(`${this.name} — Пират в команде уже ожидает!`);
};

const Snk = mongoose.model('Pirat', Schema);

const Nakama = new Snk({ name: 'pirat' });

Nakama.save().then(() => {
  console.log('Пират успешно присоеденился к комаде!');
  Nakama.show();  
});