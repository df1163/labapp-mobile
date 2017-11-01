var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.send('Index page is not set!');
});

router.get('/PutuoEdu', function (req, res, next) {
    res.send('Panel page!');
})

module.exports = router;
