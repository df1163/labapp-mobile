/**
 * Created by alex on 08/11/2017.
 */
var fs = require("fs"), request = require('request');

var cookie_val = 'FedAuth=77u/PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48U2VjdXJpdHlDb250ZXh0VG9rZW4gcDE6SWQ9Il82OTBmYjkwMy05ZGQwLTQ0NWQtYWI4NS03NTk2ZjJmNjU1ZjMtQjVFQ0RFNjNDMDlCNkY4NUFENTkxNEZENkRBMEM1RTMiIHhtbG5zOnAxPSJodHRwOi8vZG9jcy5vYXNpcy1vcGVuLm9yZy93c3MvMjAwNC8wMS9vYXNpcy0yMDA0MDEtd3NzLXdzc2VjdXJpdHktdXRpbGl0eS0xLjAueHNkIiB4bWxucz0iaHR0cDovL2RvY3Mub2FzaXMtb3Blbi5vcmcvd3Mtc3gvd3Mtc2VjdXJlY29udmVyc2F0aW9uLzIwMDUxMiI+PElkZW50aWZpZXI+dXJuOnV1aWQ6OTc2ZTg3OTctZDEwYi00NjJjLWIwNGQtOTAwZmEzODRjNGM5PC9JZGVudGlmaWVyPjxDb29raWUgeG1sbnM9Imh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwNi8wNS9zZWN1cml0eSI+WDY0YkZqSWc5dENOQ0d5TmNSK3YzNWRKRDBNUDQyNGlsM1VjWUhYd1MwS0gzcGMxci9aUll2TkJtTVNGZGxRZnNtbGE2dUVGUVFITThPaGliL2pucEZnTGVSb3M0T0tDcWdocDJHSC9LMVllaWJ2Y2RPck1ERzMwZWpLeHhwRm54UzlLVlBoakRRVlZtYWhqVzNGdENWL1pZSDZiT2xoeXYwK0Z2b1hoU3hNanh3YXFsdENqNFFsRTh4Q1hLaTIyd0VFZEJsWCt4RXVKeWJ4eGhNMEs5RDVCWkxzR2czZk9OZ05GNzFkZThxTTJacDlQQm1pWlEyVTZPdkJCc3lGN1ArZGthS3NLOHRTbkdGeWJSdXNZdHZOaUlhN085S0l3UE9DR3VHNnYvaTNpQ0JiT2wvUVpOTnZxdGdOY3c5V3pyM2NzMnpQMStodENhWXc3TXYxbEM3bW1kQnVSY0xuSVlVSXdxL25KQ0RNMDdjTG13ekhaNXhQVUJRYnNHYzZ2aDlSRmF4dldsU3J0WUF1RTRkK0JDWlRkemhzYzVlMCs4VkVQQUpQUWFXdGFzODdCNyt6SEdBbjRFejRhWkJ1a3ZvdjFpOWpCNGx1YllySFhTOEpybDl0NkY0WnhjR3gwZGQ4SnVoY2pPK2NkbHNlY2NJcEV1YkN4Y28xSkNsSTBucnVMVjNTTXZydlJiWmdaSlVnRVR3NC9OVmNGcy9zaXB4clNKTHZvUXBqOHNIeDY1ZEhhT2diVUovWmRzUXJiMVB1QXA0bHhHU1pobDhQZGg1bmZqNllYOXZiTUJ6bFY2VXdva2ZvYlkzck9wRzAveVBtK1pRL0xwYzV0b1N2K3huUEdXeTQrSG5EcGZBYUUra2M5L28zZGtqanhCSGhNckJ4dmZMSkc5N0hYdnVDZ05tSlFvQWh6Tk9aZFdtYkc5Mm1pTE9INERqbllVaHBlY0Z5WlNXR2Yyc1hvRVkzSzUzL1A3TVpYYUZ3NmFicVhPSDVocjNIYXo5QitkbE5JYklyaDNMRXhMTjF6T2dGaTUvYmwzdVo3UkhobFkvRTJDQUZxNXpXMXZpSjBvN3RTYWlrbDlyNTcxcDYrYUROQThjL0dqSVQvMm9iS2VXcVZvM00zejVEUUxqU1RjVmswQ3Rxa1VJMHltcW5NNUFFRnF0TVVGZzJvaEk3QmppTU5makd1ODZzVzlicHJlNk90anRaSzFZWnpvenUyUlVLYjl5eGd1aVUybllBSlNTTE5Ya0JOOTRnTUVCNjBXMjRtcS9SaElRbWdmVE0vTzRFdDU2bTBybk5yTXFKWDlpekR3R29DNUkxL2ZLbHV0TVZhZmh0bDRBellBYmRZZ1dhekVMRTlISWhyOUk1TFJDT2lRVVF1QVB2UzdwL1NKT1NWVnhN; FedAuth1=RTNZdHo0aHBqbis3U2VRRUhyRC9nUlVtcllxWUlBK2d5TkJxV3RNbUFzR3Q5Ky9CR1RscTZ5d2F5TXpRaG1pL2xzN3g5OUlEeUMxZ3JIS2JhVGc2WXhVeGxLZzFMZ3ZSYUtEK01RNFNaWTZmdTNycFVBODJ0QkZTRUhheXF6aVpMUVlXeDAySVcxRFUwcXpDamx3cUR0ak9QOGpadSt1Q3pQNERkazNuUWY2ZzdGNmJ4ODYweHE4NWpVdlJqVUQ5L3FuRTBMUUdydWlRczRENlQwaWZJc0Z4RkJ6SlNLUGM5UXJ1czdRRW5nVW5qZjNVV3owVCtyRHpsOU16cncyT1FhZFVBSDllRUpacGFlMzVib0d5cy9Lb1B1a1ROWi9kV2MxUU5kbk5oR1Z1ZmNTdi84b3NIMVlYY1p3U3RMb3RZMFE1dGhRRUgzRzMraXpJa284RTZ4WXZaT1dTUmtsR0ZVVmoxUHRiRW1UTlpIaUoxVUt0c2htNzlMM3NlVXNjeGdnM3ZrNms3N3V6YzVHbnk3U2t2M0JaVThqSFBEQWozMElkbVo3WkdSOEgzeXBUcXEzYUZYc2RjRXdOekFtMlVrR2dFOGV6QUVBa0YyTXNrWi96RndUbmVuVTZSYVg5Y3hhS1ZXaTYwamp5am80TzJrcG1SNVluVWpLaGpaYWlxTC9GcmdPUHV2LzFLME1MTTA2b1dpa1RtOHowbGVscm5SbmM3Q0haUzMvNjVXTmRpbEEwRW9HUGI2VDFiZU5KWWNTbVdPRVhJeDB1N0JMeWJZb1d4aDBoMFpmSUxJSXNHQi93ZnR1RDZHMG9Bc2xkMXE1OTZ0YkNLVVJtUmRMUFk0cEpySWMvV3FqdFNuclRqYTVmQk8vRDB6TFl3dlpqeVowdUVIbUdxTzEvSlJyOUNDd0hCZDBOTjkxNHo5TER6QSs4UmZGNlpwZ1ZzPC9Db29raWU+PC9TZWN1cml0eUNvbnRleHRUb2tlbj4=; Hm_lvt_d39e67062f2c834c707b85a43e564cd4=1510380578,1510381040,1510385785,1510721740; Hm_lpvt_d39e67062f2c834c707b85a43e564cd4=1510723539';

var headers = {
    'cookie': cookie_val,
    'Accept': '*/*',
    'Connection': 'keep-alive',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
    'Accept-Encoding': 'gzip, deflate',
    'Accept-Language': 'en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7,ja;q=0.6',
    'Cache-Control': 'max-age=0',
    'Connection': 'keep-alive',
    'Pragma': 'no-cache',
    'Upgrade-Insecure-Requests': '1',
    'Host': 'yun.pte.sh.cn',
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.75 Safari/537.36'
};

console.time('Total download costed');

var pagesNum = [];

Array.from({length: 15},(v,i) => i).forEach(index => {
    pagesNum.push(index);
try {
    fs.statSync('page' + index).isDirectory();
} catch (e) {
    fs.mkdir('page' + index);
}
})
//
// for (let i = 0; i < 15; i++) {
//     pagesNum.push(i);
//     try {
//         fs.statSync('page' + i).isDirectory();
//     } catch (e) {
//         fs.mkdir('page' + i);
//     }
// }

// async function getPromises(){
//     let promises = pagesNum.map(num => 'http://yun.pte.sh.cn/AppShop/AppHome/RecommendApp?pageIndex=' + num + '&pageSize=20&order=UpTime');
//     let results = [];
//     for(let promise of promises){
//         request({
//             url: promise,
//             headers: headers
//         }, function (err, res, body) {
//             if(err) throw(err);
//             let data = JSON.parse(body).data;
//             results.push(await data);
//         })
//     }
// }

function timeout(ms) {
    return new Promise(function (resolve, reject) {
        setTimeout(resolve, ms);
    });
}

async function asyncPrint(value, ms) {
    await timeout(ms);
    console.log(value);
};

let getFoo = () => new Promise((resolve, reject) => resolve('FOO'));


let getBar = () => new Promise((resolve, reject) => resolve('BAR'));

async function getPages() {
    // 0.05-0.07ms
    //console.time('getPages runs');
    // await Promise.all([
    //     asyncPrint(123, 5000),
    //     asyncPrint(234, 3000),
    //     asyncPrint(345, 6000),
    //
    // ]);

    // 20-30ms
    // await Promise.all([getFoo(), getBar()]);
    // 20ms total
    // await getFoo();
    // await getBar();
    // 0.15ms
    // getFoo();getBar();

    //console.timeEnd('getPages runs');

    console.log('================================================================');
    console.log(`Current directory: ${process.cwd()}, current CPU usage: ${JSON.stringify(process.cpuUsage())}`);

    // process.emitWarning('Something happened!', {
    //     code: 'MY_WARNING',
    //     detail: 'This is some additional information'
    // });

    process.on('warning', (warning) => {
        console.log('===========================Warning Starts=====================================');
    console.warn(warning.name);    // 'Warning'
    console.warn(warning.message); // 'Something happened!'
    console.warn(warning.code);    // 'MY_WARNING'
    console.warn(warning.stack);   // Stack trace
    console.warn(warning.detail);  // 'This is some additional information'
    console.log('===========================Warning Ends=====================================');
});

    const myWarning = new Error('Something happened!');
    // Use the Error name property to specify the type name
    myWarning.name = 'CustomWarning';
    myWarning.code = 'WARN001';
    // process.emitWarning(myWarning);


    console.log(`Current gid: ${process.getegid()}`);
    console.log(`Current uid: ${process.geteuid()}`);
    console.log(`Current pid: ${process.pid}`);

}

function downloadCall() {
    Promise.all(pagesNum.map(async function (num) {
        // request({
        //     url: 'http://yun.pte.sh.cn/AppShop/AppHome/RecommendApp?pageIndex=' + num + '&pageSize=20&order=UpTime',
        //     headers: headers
        // }, function (err, res, body) {
        //     if (err) throw(err);
        //     else {
        //         return JSON.parse(body).data;
        //     }
        // });

        return new Promise(function (resolve, reject) {
            request({
                url: 'http://yun.pte.sh.cn/AppShop/AppHome/RecommendApp?pageIndex=' + num + '&pageSize=20&order=UpTime',
                headers: headers
            }, function (err, res, body) {
                if (err) reject(err);
                else {
                    resolve(JSON.parse(body).data);
                }
            });
        });
    }

)).then(function (pages) {
        Promise.all(pages.map(function (page) {
            return new Promise(function (resolve, reject) {
                Promise.all(page.map(function (app) {
                    return new Promise(function (resolve, reject) {
                        let urlArray = app.AppLogo.split('/'),
                            uniqueImgID = urlArray[urlArray.length - 1].split('.')[0],
                            fileImgType = urlArray[urlArray.length - 1].split('.')[1], name = app.AppName,
                            file = app.AppUrl.split('/'), fileName = file[file.length - 1].split('.')[0],
                            fileType = file[file.length - 1].split('.')[1];

                        Promise.all([
                            new Promise(function (resolve, reject) {
                                request({
                                    url: 'http://yun.pte.sh.cn' + app.AppLogo,
                                    headers: headers
                                }).pipe(fs.createWriteStream('page' + pages.indexOf(page) + '/' + uniqueImgID + '.' + fileImgType)).on('close', function () {
                                    resolve();
                                }).on('error', function () {
                                    console.log('ERROR downloading pics');
                                    reject();
                                });
                            })
                            // , new Promise(function (resolve, reject) {
                            //     request({
                            //         url: 'http://yun.pte.sh.cn' + app.AppUrl,
                            //         headers: headers
                            //     }).pipe(fs.createWriteStream('page' + pages.indexOf(page) + '/' + name + '.' + fileType)).on('close', function () {
                            //         resolve();
                            //     }).on('error', function () {
                            //         console.log('ERROR downloading files');
                            //         reject();
                            //     });
                            // })
                        ]).then(function () {
                            resolve();
                            console.log(page.indexOf(app) + ' within page ' + pages.indexOf(page) + ' finished all!');
                        }).catch(function (e) {
                            reject();
                            console.log(e);
                            console.log('Error with downloading app process!');
                        });
                    });
                })).then(function () {
                    resolve();
                    console.log('Page is downloaded!');
                }).catch(function () {
                    reject();
                });
            })
        })).then(function () {

            console.timeEnd('Total download costed');
            console.log('All pages done!')
        }).catch(function (e) {
            console.log('===========================');
            console.log(e);
            console.timeEnd('Total download costed');
            console.log('Error in pages!');
            console.log('===========================');
        });
    }).catch(function (reason) {
        console.timeEnd('Total download costed');
        console.log(reason);
    });
}

// for(let index = 0; index < 15;index++){
//     try{
//         fs.statSync('page' + index).isDirectory();
//     }catch(e){
//         fs.mkdir('page'+index);
//     }
//     let reqOptions = {
//         url: 'http://yun.pte.sh.cn/AppShop/AppHome/RecommendApp?pageIndex=' + index + '&pageSize=20&order=UpTime',
//         headers: headers
//     };
//     request(reqOptions, function (err, res, body) {
//         try{
//             let apps = JSON.parse(body).data;
//
//             apps.forEach(function (app) {
//                 let urlArray = app.AppLogo.split('/'), uniqueImgID = urlArray[urlArray.length - 1].split('.')[0],
//                     fileImgType = urlArray[urlArray.length - 1].split('.')[1], name = app.AppName,
//                     file = app.AppUrl.split('/'), fileName = file[file.length - 1].split('.')[0],
//                     fileType=file[file.length - 1].split('.')[1]
//                 ;
//
//                 request({
//                     url: 'http://yun.pte.sh.cn' + app.AppLogo,
//                     headers: headers
//                 }).pipe(fs.createWriteStream('page' + index + '/' + uniqueImgID + '.' + fileImgType)).on('close', function () {});
//
//                 request({
//                     url: 'http://yun.pte.sh.cn' + app.AppUrl,
//                     headers: headers
//                 }).pipe(fs.createWriteStream('page' + index + '/' + name + '.' + fileType)).on('close',function(){console.log('************************************Finished local write*****************************************');});
//             })
//         } catch(e){
//             console.log(e);
//             console.log('************************************Cookie expired*****************************************');
//         }
//     });
// }

//function downloadPage(apps, resolveFunction, rejectFunction, pages, page) {
//     Promise.all(apps.map(function (app) {
//         return new Promise(function (resolve, reject) {
//             downloadFiles(app, resolve, reject, pages, page, apps);
//         });
//     })).then(function () {
//         resolveFunction();
//         console.log('Page is downloaded!');
//     }).catch(function () {
//         rejectFunction();
//     });
// }
//
// function downloadFiles(app, resolveFunction, rejectFunction, pages, page, apps) {
//     let urlArray = app.AppLogo.split('/'), uniqueImgID = urlArray[urlArray.length - 1].split('.')[0],
//         fileImgType = urlArray[urlArray.length - 1].split('.')[1], name = app.AppName,
//         file = app.AppUrl.split('/'), fileName = file[file.length - 1].split('.')[0],
//         fileType = file[file.length - 1].split('.')[1];
//
//     Promise.all([
//         new Promise(function (resolve, reject) {
//             // request({
//             //         url: 'http://yun.pte.sh.cn' + app.AppLogo,
//             //         headers: headers
//             //     },
//             //         function (err, res, body) {
//             //             resolve();
//             //         });
//             request({
//                 url: 'http://yun.pte.sh.cn' + app.AppLogo,
//                 headers: headers
//             }).pipe(fs.createWriteStream('page' + pages.indexOf(page) + '/' + uniqueImgID + '.' + fileImgType)).on('close', function () {
//                 resolve();
//             }).on('error', function () {
//                 console.log('ERROR downloading pics');
//                 reject();
//             });
//
//         })
//         , new Promise(function (resolve, reject) {
//
//             // request({
//             //         url: 'http://yun.pte.sh.cn' + app.AppUrl,
//             //         headers: headers
//             //     },
//             //     function (err, res, body) {
//             //         resolve();
//             //     });
//             request({
//                 url: 'http://yun.pte.sh.cn' + app.AppUrl,
//                 headers: headers
//             }).pipe(fs.createWriteStream('page' + pages.indexOf(page) + '/' + name + '.' + fileType)).on('close', function () {
//                 resolve();
//             }).on('error', function () {
//                 console.log('ERROR downloading files');
//                 reject();
//             });
//
//         })
//     ]).then(function (res) {
//         resolveFunction();
//         console.log(apps.indexOf(app) + ' within page ' + pages.indexOf(page) + ' finished all!');
//     }).catch(function (e) {
//         rejectFunction();
//         console.log(e);
//         console.log('Error with downloading app process!');
//     });
// }

// var options = {
//     hostname: 'yun.pte.sh.cn',
//     port: 80,
//     path: '/AppShop/AppHome/RecommendApp?pageIndex=11&pageSize=20&order=UpTime',
//     method: 'GET',
//     headers: {
//         cookie: cookie_val,
//         Accept: '*/*',
//         Connection: 'keep-alive'
//     }
// };
//
// var req = http.request(options, function (res) {
//     res.on('data', function (chunk) {
//         try {
//             var datas = JSON.parse(chunk).data;
//             datas.forEach(function (obj) {
//                 let urlArray = obj.AppLogo.split('/'), name = urlArray[urlArray.length - 1].split('.')[0];
//                 console.log(obj);
//                 let r = http.request({
//                         hostname: 'yun.pte.sh.cn',
//                         port: 80,
//                         path: obj.AppLogo,
//                         method: 'GET',
//                         headers: {
//                             cookie: cookie_val,
//                             Accept: '*/*',
//                             Connection: 'keep-alive'
//                         }
//                     }, function (res) {
//                         res.on('data', function (img) {
//                             fs.writeFileSync(name + '.png', img);
//                             console.log('Done');
//                         })
//                 });
//
//                 r.on('error', function(e){
//                     console.log('Error on image request');
//                 });
//
//                 r.end();
//             });
//         } catch (e) {
//             console.log(e);
//             console.log('COOKIE MODIFIED!!!!!!!!!!!!');
//         }
//     })
// });
//
// req.on('error', function (e) {
//     console.log('problem with request: ' + e.message);
// });
//
// req.end();
//
// http.get('yun.pte.sh.cn', function(res) {
//     var html = '';
//     res.on('data', function(data) {
//         html += data;
//     });
//     res.on('end', function() {
//         console.log(html);
//     });
// });

module.exports = getPages;