/**
 * Created by alex on 01/11/2017.
 */
var express = require('express');
var router = express.Router();
var http = require('http');
var download = require('./downloadResources')();

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
    res.render('shopIntro-node-server.html', {relativePath: 'Recom', test: 'abcd'});
});

router.get('/Index', function (req, res, next) {
    res.render('shopIntro-node-server.html', {relativePath: 'Index', test: 'abcd'});
});

router.get('/DownHistory', function (req, res, next) {
    res.render('shopIntro-node-server.html', {relativePath: 'Down', test: 'abcd'});
});

router.get('/AppDetail', function (req, res, next) {
    //console.log(req.path);
    res.render('shopIntro-node-server.html', {relativePath: 'Detail'});
});

router.get('/RecommendApp?*', function (req, res, next) {
    let query = req.query;
    if (query.pageIndex === '14' && query.pageSize === '20' && query.order === 'UpTime') {
        res.send(`{"data":[{"Id":"5ef227c6-130d-4779-a5e4-f99d71650f42","AppName":"牛津上海版小学一年级英语第一学期1A(试验本)-学课文","AppLogo":"/AppShop/Upload/AppLogo/ec830675-db3d-48d9-9483-e3374b3ea218.png","AppSize":6236780,"AppUrl":"/AppShop/Upload/AppFiles/402f8bba-9a86-4856-9f90-ab5f3d086fc4.zip","AppDescription":"牛津上海版小学一年级英语第一学期1A(试验本)-学课文","Author":"110d205c-ef3a-4f65-8e94-c50f979845f2","UpTime":"2016-10-27","AppDownCount":0,"Category":"abdc9409-2eb2-49d5-81f9-3220b6003cd7,f914b1f7-d468-4878-b4e2-694b8ab9f5a8,","Keywords":"牛津上海版小学一年级英语第一学期1A(试验本)-学课文","IsEncrypt":0,"MainName":"Call.exe","PlatForm":"7d3585b7-7b66-43ee-adff-eb68d684c67f","Attachment":""},{"Id":"db59d90e-452b-4bb9-abf3-103d4ef54981","AppName":"数学公式速查","AppLogo":"/AppShop/Upload/AppLogo/961ab21a-a6da-4bfd-9647-1dc67575eeb8.png","AppSize":9750900,"AppUrl":"/AppShop/Upload/AppFiles/f4523c7b-0b9d-4f79-a5bb-84bafed1c8c2.apk","AppDescription":"这是一款简单,易用的中学数学公式速查软件。\n主要功能如下:\n1,输入公式的部分名称即迅速查询到公式的说明；\n2,可以收藏常用的公式；\n3,可以把公式复制,粘贴到其它地方；\n4,实现了中学物理各种计量单位之间的换算。","Author":"110d205c-ef3a-4f65-8e94-c50f979845f2","UpTime":"2016-10-25","AppDownCount":10,"Category":"628ba9e6-75a2-465d-a58b-0d0e7c2797e2,6db2f74a-4cc8-4293-b2a0-120fa76b5dff,","Keywords":"数学公式速查","IsEncrypt":0,"MainName":"数学公式速查.apk","PlatForm":"26baf95d-c204-45f8-8d23-d66a752525c7","Attachment":""},{"Id":"a887991c-adf5-4928-abee-6b605786b0dc","AppName":"同步学口语","AppLogo":"/AppShop/Upload/AppLogo/5d15dce8-bbd1-4992-8bd1-b5b815d364cc.png","AppSize":15523492,"AppUrl":"/AppShop/Upload/AppFiles/3495ad8e-50f0-4a21-90dd-9da218cc304d.zip","AppDescription":"同步口语练习","Author":"110d205c-ef3a-4f65-8e94-c50f979845f2","UpTime":"2016-10-25","AppDownCount":8,"Category":"628ba9e6-75a2-465d-a58b-0d0e7c2797e2,d077e4ca-df2a-410e-a9a6-2411be0d5532,","Keywords":"同步学口语，口语，英语","IsEncrypt":0,"MainName":"同步学口语.exe","PlatForm":"7d3585b7-7b66-43ee-adff-eb68d684c67f","Attachment":""},{"Id":"703c9d50-8921-4884-9252-2ebfdf25ef16","AppName":"中英会话","AppLogo":"/AppShop/Upload/AppLogo/3b25fad0-8bb1-4f59-bb2a-ae0c17f37761.png","AppSize":27601414,"AppUrl":"/AppShop/Upload/AppFiles/feaf6678-9513-4493-bf93-89b431ba59b7.zip","AppDescription":"日常用语、情感交流、公共场所、交通旅游、集会活动、休闲娱乐。","Author":"110d205c-ef3a-4f65-8e94-c50f979845f2","UpTime":"2016-10-25","AppDownCount":0,"Category":"abdc9409-2eb2-49d5-81f9-3220b6003cd7,f914b1f7-d468-4878-b4e2-694b8ab9f5a8,","Keywords":"中英会话，英语，会话","IsEncrypt":0,"MainName":"中英会话.exe","PlatForm":"7d3585b7-7b66-43ee-adff-eb68d684c67f","Attachment":""}],"total":284,"course":"","grade":"","role":"教育局管理员"}`);
    }
    else res.send('ERROR!');
});


module.exports = router;