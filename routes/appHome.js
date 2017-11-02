/**
 * Created by alex on 01/11/2017.
 */
var express = require('express');
var router = express.Router();
var apps = require('./appData.js');

console.log(apps.length);


router.get('/', function (req, res, next) {
    res.redirect('/AppShop/AppHome/Index');
});

router.get('/SearchApp', function (req, res, next) {
    res.send('Done');
});

router.get('/Recommend', function (req, res, next) {
    res.render('index-node-server.html', {relativePath: ''});
});

router.get('/Index', function (req, res, next) {
    res.render('index-node-server.html', {relativePath: ''});
});

router.get('/DownHistory', function (req, res, next) {
    res.render('index-node-server.html', {relativePath: ''});
});

module.exports = router;