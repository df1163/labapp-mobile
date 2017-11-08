/**
 * Created by alex on 08/11/2017.
 */
var fs = require("fs"), request = require('request');

var cookie_val = 'FedAuth=77u/PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48U2VjdXJpdHlDb250ZXh0VG9rZW4gcDE6SWQ9Il8yYjZlZTc3ZS0zMjQwLTQ4ZDgtOTJhYi05MTNhZjdhN2ZhNjQtOTQwNTVFRjlDMzM2RjBDMDg3Q0YxM0VBODYyMTA1RjQiIHhtbG5zOnAxPSJodHRwOi8vZG9jcy5vYXNpcy1vcGVuLm9yZy93c3MvMjAwNC8wMS9vYXNpcy0yMDA0MDEtd3NzLXdzc2VjdXJpdHktdXRpbGl0eS0xLjAueHNkIiB4bWxucz0iaHR0cDovL2RvY3Mub2FzaXMtb3Blbi5vcmcvd3Mtc3gvd3Mtc2VjdXJlY29udmVyc2F0aW9uLzIwMDUxMiI+PElkZW50aWZpZXI+dXJuOnV1aWQ6NmU1ODI0YmYtZDA3NC00YzM3LWIyMWQtNGE5MTZlN2Y1ZDI2PC9JZGVudGlmaWVyPjxDb29raWUgeG1sbnM9Imh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwNi8wNS9zZWN1cml0eSI+THlQK29DL0NwNVIvQUdta01XcU9OUTU2L2RIYk0wME1vOWRWTjk4Z2wyZEVIN0Z6Sis5TU8yeitYNDl6VjRIckEwTlg0ZFJaOC9EQzQwZ296VkF0a1B4SlgyVi9aUFFSTVpudVJFRTJWcXArZXgwdVMwc3NSZ3VpWmNYcytjQkU1R0VOQUFtTkF5S1l1N1owK25CcTFqaytpYThlR0Y5dzVnbnBmSGF6d2QxeGtsZmRDSWZlSlE4TXJjcHlXaWkwYlN3amlVckdva0VzanRNZ25TVzZLMVptZEt2YnFFWTdiYTFneGc0ZFBjL2JYZGhoYjBSMUlHSXNxZU5pRUhyVVE0NC90MjNwRThuQ1FsQ21JRUg2Sll3V1JCK1dzUGdYbkxoeDgvdjFXREJoLzdnd2hvL1doVzQ5anpFK2NwSzVMcmhCUUxyYStzTGlYbDRkRVNDc1ZHMnNVVHozeDNlZ3M3UVNZZ01kdDkzTnUxWTNlVUxOb3ZiMkgvTFB6S0phNzIrN09YVXJabUx0Q1pjSHJpYk5qd3RTckJNOEJNR3ZTQzd0Q2VnZmpUYWUwSUY2VFZqd0ZHRDBubXpram5wTTdpdVpUbExNQlh2eTZwaGducFVuVmtPSExPTXNkYm5kdkUrOWN5YXozM0lZdUhIMDVRbGYxRnZlMTZnRFhERjJrYnl0WEUvVEM3Mi8zNmZtQlRwaEdtdU5tQUJPMktMa2pzdWcxbWZXb0tiQm1tdGFOVjZ4bFpWMGRqK2hUT3pwNkxlWXAvemRzdGVWQXBQNE56TU1RcEgrdk9BUmxKamJCUE5XUVRHN0VJTkNzUkg3TDh4aDloNEdNamp2emZwUE5JNGIyZDVibmU3OXk0QVYzZkJqa0JOdFFUeFFYYXNic3RkVjZNK1EzUmErbHNMY2RTSHJoRFVGajFqK08xZTNDdzBkT3NLRGVuZ2Y0cVB0R2VRY21sN2tSUjROYnZwbW4yeHBuaEVjT0hBUjd0WkF3cHV3MjNRYkE1SXpyU21JTkdCU25KMG5CZXpzQ2ZLeUNRYmJPNlYxeTNhdzJtSFU3OGJZT093bjFzeGtFUTZLaWNwMGpyQk9HamdmdGpmd0M2SVpvdkVwMlVxK1RoR09VRmp4bFV3cU8vSFo4SVlHbFRLM1lnb1lYaHUzUUgzUVZQbWtPeStBWkgxRDArUU9vWUNaV0pDMFdGbDFOOXUxVnpndWNkVkV0T3Q3L1NSQW9nQlF2V1RrSExiZ0Z1RWx2cXdGVisvNVhKeUNuQ1pLU2pEZ05kVlZ1blRNNGN0T1JhYXFXZy8zYXN4ZHVGdXVaYVp4VCswbmhjUWN2UkFZcTVoczE4Sjc5b2Yrc1g1VzNka2w5NTFWb2wzQzRvVFNnUzhmbGVGL1FnZi9PekVGTjNV; FedAuth1=dXFoQ2plWncvdkhYaDU2UGpsWkYxak9Ua05WaTJkYlcyeGJUdGIrYTZGdk1WUk9YYVhzTHFyazUxdmg1OUVzbzZHL2wyRlIzK2hPRkFMODROWGRNVWpyOEEvZFZBeS8vNjVFNGx4K0VrYzlFRHVPc3FXSVlBZ05HM0duUTdYZU9KOVkxMUFjSWJ3YlNHRmFsdlF2TldNYTBNQjFrZ2UxaFpoTEcvOGtRTlNZVzFkRmEvRE9PblpxbVhNbWJCRldMek9kOHpXUUdKa2cxamVrR1kzTEdJbmFuTWNTdVIyaWVVMitKdFo5RExDSFZScFF5SkpubDF2eUgyNG5zTzFMTS9EZjkrTWdBY3o1S0xYWnhrVFdIZGtFMVEzZDlyenVYZmtzRUN0NXI3bTNleVEvd0d2WDZIelBEVG9yT3M1QlNmZ0d2bkNJVFdwaGxuZDdmcVFxZWtlcXd6VmgvamM2TCtzRUd6bDRJWGtQNkhQL3lEQ0w1RFFMNmRMTjc3RXIyVzZxcXp1RElDKzQ4MXMrS1pPaEMzbjArY0Z5WGdSVWxwcTA4MHRWTnVnTEZTdGRzTHlCUWQvMmx0ZXJkYXh4Vm9XMlNUNEdqbm1ZTDZTMHBLM3Y0ajlmZzNza3JEc0x2Smt3Q1hXNGZUd2Nzejg1SnVzay9WZUI5NkhGMjgwZ0NtOU14aGFob0duL052OG5vbnpGazRmeHEyeTNpcW45eVA5d3kvT3J1dVh3NzdheTJzSVJabnY4dktaZ2tzbHliTHFZK3dyc3FnTjFGUGlZWnFRL0JYeDZBSkZsNlpxZlpuL1FBYis5emliYmw5OVRDTzZRby9GWnpwelQrODRaNkdTUVFoTWt0RTNTZU9PdE5MUC9yeHlrT0pMMXBndWN1R1B4dWRKZlF1dGxndVMvY0J0TTMwRlhGVlRaeUFISlZiSDFRd1hXVDhCaFBiPC9Db29raWU+PC9TZWN1cml0eUNvbnRleHRUb2tlbj4=; Hm_lvt_d39e67062f2c834c707b85a43e564cd4=1510134907,1510141179,1510141187,1510150214; Hm_lpvt_d39e67062f2c834c707b85a43e564cd4=1510150214';

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

function downloadPage(apps, resolveFunction, rejectFunction, pages, page) {
    Promise.all(apps.map(function (app) {
        return new Promise(function (resolve, reject) {
            downloadFiles(app, resolve, reject, pages, page, apps);
        });
    })).then(function () {
        resolveFunction();
        console.log('Page is downloaded!');
    }).catch(function () {
        rejectFunction();
    });
}

function downloadFiles(app, resolveFunction, rejectFunction, pages, page, apps) {
    let urlArray = app.AppLogo.split('/'), uniqueImgID = urlArray[urlArray.length - 1].split('.')[0],
        fileImgType = urlArray[urlArray.length - 1].split('.')[1], name = app.AppName,
        file = app.AppUrl.split('/'), fileName = file[file.length - 1].split('.')[0],
        fileType = file[file.length - 1].split('.')[1];

    Promise.all([
        new Promise(function (resolve, reject) {
            // request({
            //         url: 'http://yun.pte.sh.cn' + app.AppLogo,
            //         headers: headers
            //     },
            //         function (err, res, body) {
            //             resolve();
            //         });
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
        //
        //     // request({
        //     //         url: 'http://yun.pte.sh.cn' + app.AppUrl,
        //     //         headers: headers
        //     //     },
        //     //     function (err, res, body) {
        //     //         resolve();
        //     //     });
        //     request({
        //         url: 'http://yun.pte.sh.cn' + app.AppUrl,
        //         headers: headers
        //     }).pipe(fs.createWriteStream('page' + pages.indexOf(page) + '/' + name + '.' + fileType)).on('close', function () {
        //         resolve();
        //     }).on('error', function () {
        //         console.log('ERROR downloading files');
        //         reject();
        //     });
        //
        // })
    ]).then(function (res) {
        resolveFunction();
        console.log(apps.indexOf(app) + ' within page ' + pages.indexOf(page) + ' finished all!');
    }).catch(function (e) {
        rejectFunction();
        console.log(e);
        console.log('Error with downloading app process!');
    });
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
                downloadPage(page, resolve, reject, pages, page);
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