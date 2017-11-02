var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('indexPage.html');
});

router.get('/AppShop', function (req, res, next) {
    res.redirect('/AppShop/AppHome/Index');
});

router.get('/PutuoEdu', function (req, res, next) {
    res.send('Panel page!');
});

module.exports = router;
