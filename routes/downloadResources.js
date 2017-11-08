/**
 * Created by alex on 08/11/2017.
 */
var fs = require("fs"), request = require('request');

var cookie_val = 'FedAuth=77u/PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48U2VjdXJpdHlDb250ZXh0VG9rZW4gcDE6SWQ9Il8yYjZlZTc3ZS0zMjQwLTQ4ZDgtOTJhYi05MTNhZjdhN2ZhNjQtNjJCREUxNTU0RjYyQjk5NzMzMEU1NzdGRDg2QUM4RkEiIHhtbG5zOnAxPSJodHRwOi8vZG9jcy5vYXNpcy1vcGVuLm9yZy93c3MvMjAwNC8wMS9vYXNpcy0yMDA0MDEtd3NzLXdzc2VjdXJpdHktdXRpbGl0eS0xLjAueHNkIiB4bWxucz0iaHR0cDovL2RvY3Mub2FzaXMtb3Blbi5vcmcvd3Mtc3gvd3Mtc2VjdXJlY29udmVyc2F0aW9uLzIwMDUxMiI+PElkZW50aWZpZXI+dXJuOnV1aWQ6ZTBmMmE2MTEtYWU4ZC00MzU2LWJhOTYtYmM1NGVmZDMyNmNhPC9JZGVudGlmaWVyPjxDb29raWUgeG1sbnM9Imh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwNi8wNS9zZWN1cml0eSI+R2NybEZnaVNwZHlIVWNQL1VsaXNvNkludkgyNnd4NDdoUzZzeUMwWE9XbmlUKzdKa2ZZcWxnZm1ybHdWWksySXVpMkVYamExZCt4SU1DSElkdG9sTG1yS3MvdHgrYlBFazdvbEE3Z3NEbGFWREUvbnI4MzEvcDVWVXAxMDZ3K0IvaTFkWjZZZjF6VFQwRzkreGlZejl4V0VUNVdhbllZQlFpd3FpNFhmSkdpSnh2NW1aUGd5QXRLbkY3QVFzSUM4ZEN6a1lyMXowc0pud09pWkdIaDRpMTc2ajdyblBoWHJBY0d3d0YwMlRaQnZVb3JlSVNSSWtUenNoUkVPTi9xREV4Z2ZpSXBNWENXK2RXYnh2Z0FPWjNXMEYvZWFOUWpRTjZ3ZzVhR3VxNkQ5UkxUOUtGZGpyZUY3K0s5WmpGRzJLcWdjVHNINXVQcWUzZlliQU40R1MxbzdVWVpXVC83bmh2YnZJRXVwd25Ka2RXZmlPMWFLbmtFM1dDQ1JuU1E1cTdxLzVFZ0hxaGdIM25ob2FlQlBSTXRiMGtDLzFhcjViUXZRQWVkV3IwY2VwRmUvNlo0YkFjb1dGTU53cUdKRjhQN215WUQzcUFBTjRmWEpueGUzcmRLTWZ0dDhJS2t5d1VETUFULzlwOFVTUGxHSU9ST21jK0cxc21jQU1JU3dCNHBldjNDRmI3bFQ3ZWFmSXovRkx4ekdZb3kwUHZYQ3M1WGZybmZ6R1FlMVdQblhwSFBoL1NxZWJPRUw2WDJiTnlLMUwxK24zckdpMDBEUGJJWVZob3BtYUlKUE5MUVhSam5ZMmJvbE5XRVJQUWRVY0ppa2xFUGx1ZTR5K1hxL2lnOFdPT2xRQmlWTjFBdDYwYmRuTjRzekRTUXM1OVpMMFhHakpFd3IzalBLVWRCYUZnREtWZGpSZFVwN3Y2c3JrNklST0hqSmlwM09ZTCtjM1JtTWRFYXI1QW41a25vOHFXUWlnb3dXbkowbExmYUZLNDIvRW9OQ2UyVEpFRlBMTkNBOU1neTJIQjE0V2p0OUZHRkhmR3NzYlAvQXVQTzlFU3U0eE5GZkRKOXkyVlFITHhWQmFKMVJXVVcwSXJlR2JTQ2tGMFlnVi9ManB0NEZLV2tiNktMNWZPMkxvaDJjYjRwcy91emZVc2JFdDhZQkl4QWp1a1laQXdiZ28vb0FkZHZkWk1Zbml5OFAweXVEalNEMlIwZGdXS1JLWEYySS9NZ2RRU0JHbTlvMXd0VE1HY1RSdlg5RXdXNHRMM1FjM3BvTHV4cHlHQStxSWZVYXVZU1phdXJyOXpoM1JBVVFQeUtOMU95MFZOalFGTy9NRk42cjNSRzBHZHhvTWNRYlJEQ3hHRFZ4Mnk0NlNpMUhwTm43SUpFMWc1dkJoNG9HZ0lT; FedAuth1=b296Mm5nVGxNbTVIa2wwZGlWd0E2VkV3TEJpS3dVd0crZFo3enRyalJDWDYxMlZsUzQ1MVJIb0ZUWEZFYzh1Zlh0VThjNXRwTTY1WEN3ZTNOeWRHb0xMYU1Wb2xIdGpKVjY2YlZKTHRwZjd4a01CaTdxb0RYWEgwYWpUeGxlL0g1dTNFSDdrZ0FzeHdqU05FbjhJK0VqWi9PeWtaR3d4anVyc0RnQk5Ia3dpZlRiVXZBdUM4Y3l6VHg1aVdYL1c2QXJ3ZHMrZC85UytYMTM4eUxVbkVkNnRvYU55a3F1MkpjSVpBQ1RyWVBVdzNQdGVEWTlmbm9pSW0velhsaW9ZcDEvdDdtcFBUWkVwWGdOWmhQYUJlUGxXVzRiaHNYSUExbU4xSWVGazlWUEdSTDBER1QwQ29rQlhYS0lndldmUHZmY2Z6Z1VVemdWaE84ZTVUUzBSblRtdmtrdEUxUUZIY0doZy9vcEl0SmFON3hFZHVwWXhuNmx4NTNJZjBMVTBLODlxaDduSzFBMVN6aGpxZUJTUnlCcS9IN2tzMGQ4NEJybmJDVmtQb0hVL2FQZ1N3ZkRua3prTWVoaTd0Ujd1L2tOdU4vRnhYMnVqeGN0SUNTRlF2cHJTWnJFK0VvS3BqWFdCNUNJTmVrc3FOcm56ZkxCcFZGSU1yN3hBQUJEb1d2dVM5Y3dBUUVscjVDRWFadDNINkE2V2lJSVNYb3hjdE8vczVMZXdqSnpEb1h3ejh4Z3JZSGpaSVJJNXQva3VCMlRZVWFKellWM0FZSjcxdTRFZ3JNRVNOaG1rV2FINU9SdzJReUJSdUp2c3oyak9JMkRxT3pENDBpYS9keGZmR2QrZmh1ZXhhQmF3RkZ2dngzWU4wZE5zY2hKTGhTaEFnNkF6anoyVVFPREdGakllbldyK0M0UlpjeFgwSnJocDVlTSs0WGVjYjRvZ1ZRPC9Db29raWU+PC9TZWN1cml0eUNvbnRleHRUb2tlbj4=; Hm_lvt_d39e67062f2c834c707b85a43e564cd4=1510141179,1510141187,1510150214,1510152116; Hm_lpvt_d39e67062f2c834c707b85a43e564cd4=1510152116';

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
for (let i = 0; i < 15; i++) {
    pagesNum.push(i);
    try {
        fs.statSync('page' + i).isDirectory();
    } catch (e) {
        fs.mkdir('page' + i);
    }
}

function downloadCall() {
    Promise.all(pagesNum.map(function (num) {
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
    })).then(function (pages) {
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
            console.timeEnd('Total download costed');
            console.log('Error in pages!');
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

module.exports = downloadCall;