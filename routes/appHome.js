/**
 * Created by alex on 01/11/2017.
 */
var express = require('express');
var router = express.Router();
var apps = require('./appData.js');

console.log("App lenght is: " + apps.length);


router.get('/', function (req, res, next) {
    res.redirect('/AppShop/AppHome/Index');
});

router.get('/SearchApp', function (req, res, next) {
    res.send('Done');
});

router.post('/SearchApp', function (req, res, next) {
    res.send('Done');
});

router.get('/Recommend', function (req, res, next) {
    res.render('shop-node-server.html', {relativePath: 'Recom', test: 'abcd'});
});

router.get('/Index', function (req, res, next) {
    res.render('shop-node-server.html', {relativePath: 'Index', test: 'abcd'});
});

router.get('/DownHistory', function (req, res, next) {
    res.render('shop-node-server.html', {relativePath: 'Down', test: 'abcd'});
});

router.get('/AppDetail', function (req, res, next) {
    console.log(req.path);
    res.render('shop-node-server.html', {relativePath: 'Detail'});
});

module.exports = router;