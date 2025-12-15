var express = require('express');
var router = express.Router();

/* Страница Luffy*/
router.get('/pirat/Luffy', function(req, res, next) {
    res.render('pirat', {
        title: "Монки Ди Луффи ",
        picture: "images/luffy.png",
        desc: "Луфи — главный герой аниме «Ван Пис». Весёлый и целеустремлённый пират, мечтающий стать Королём Пиратов. Обладает резиновым телом после поедания Дьявольского плода Гому-Гому. Его безудержная энергия и верность друзьям вдохновляют."
    });
});

/* Страница Roger */
router.get('/pirat/Roger', function(req, res, next) {
     res.render('pirat', {
        title: "Голд Ди Роджер",
        picture: "images/roger.png",
        desc: "Гол Д. Роджер — легендарный Король Пиратов, достигший последнего острова Лаф Тейл. Его казнь положила начало «Великой эпохе пиратства». Сильный, веселый и вдохновляющий лидер."
    });
});

/* Страница Ace */
router.get('/pirat/Ace', function(req, res, next) {
    res.render('pirat', {
        title: "Поргас Ди Эйс",
        picture: "images/ace.png",
        desc: "Эйс — командир 2-го дивизиона пиратов Белоуса. Сильный и благородный, носитель могущественного Плода Логгии Огня. Его трагическая гибель ради младшего брата стала поворотным моментом для всего мира."
    });
});
module.exports = router;
