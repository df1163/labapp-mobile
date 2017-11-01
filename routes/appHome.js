/**
 * Created by alex on 01/11/2017.
 */
var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.redirect('/AppHome/Recommend');
});

router.get('/*', function (req, res, next) {
    res.render('index.html', {relativePath: ''});
});

module.exports = router;
