webpackJsonp([6],{

/***/ 108:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 149:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/geo/geo.module": [
		271,
		12
	],
	"../pages/history/history.module": [
		272,
		11
	],
	"../pages/recommend/recommend.module": [
		273,
		8
	],
	"../pages/shopIntro/shopIntro.module": [
		274,
		10
	],
	"../pages/tabs/tabs.module": [
		275,
		9
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 149;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_apps_service__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by alex on 11/11/2017.
 */



var appDetailPage = appDetailPage_1 = (function () {
    function appDetailPage(navCtrl, navParams, alertCtrl, events, appsService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.events = events;
        this.appsService = appsService;
        this.searchPanel = false;
        this.appTitle = this.navParams.data.appTitle;
        this.appImage = this.navParams.data.appImage;
        appsService.getAppsSlow().then(function (data) { _this.apps = data; });
    }
    appDetailPage.prototype.pop = function () {
        this.navCtrl.pop();
        this.events.publish('navChange', { backto: this.navCtrl.getPrevious().component.name });
    };
    appDetailPage.prototype.openApp = function (appTitle, appImage) {
        this.navCtrl.push(appDetailPage_1, {
            appTitle: appTitle,
            appImage: appImage
        });
    };
    return appDetailPage;
}());
appDetailPage = appDetailPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-appDetail',template:/*ion-inline-start:"/Users/alex/Documents/Mobile_Development/labapp-mobile/src/pages/detail/appDetail.html"*/'<ion-content>\n    <ion-item id="headerItem">\n        <ion-icon name="arrow-dropleft-circle" (click)="pop()">\n        </ion-icon>\n        <ion-thumbnail>\n            <img src={{appImage}}/>\n        </ion-thumbnail>\n        <h2>\n            {{appTitle}}\n        </h2>\n        <p>高中|3次下载</p>\n        <p>2017-09-23</p>\n        <button class="blue-button" (click)="openApp(appTitle, appImage)" >点击下载</button>\n        <button class="yellow-button">手册下载</button>\n    </ion-item>\n    <ion-item id="bodyItem">\n        <h2>\n            软件介绍\n        </h2>\n        <p>\n            仿真物理实验室——光学”模块提供了一个实验器具完备的光学实验环境。一方面，教师可以利用它强大的功能和方便的操作把你丰富的光学知识轻松的转变为形象生动的物理课件，方便学生对于知识的掌握；另一方面，学生可以充分利用它的研究探讨性，来验证你所了解的光学知识，探讨研究你所感兴趣的一切光学现象，形成正确的研究科学知识的方法，在物理知识的世界里探索。它科学严谨的内部算法保证了这一探索的可行性和正确性。\n            “仿真物理实验室——光学”模块是学生学习与探究奇妙光学世界的优秀工具，也是教师进行光学课程教学的优秀工具。\n        </p>\n    </ion-item>\n    <ion-item id="footerItem">\n        <h2>\n            热门应用推荐\n        </h2>\n        <div id="recommendBox">\n            <div class="tile" *ngFor="let app of apps" (click)="openApp(app.title, app.image)">\n                <div class="cell-icon" [style.background]="\'red url(\' + app.image + \') no-repeat\'| safeStyle"\n                    [style.backgroundSize]="\'cover\'"></div>\n                <!--<div class="cell-icon" [ngStyle]="{\'background\' : \'red url(\' + app.image.replace(\'img/\',\'../assets/imgs/\') + \') no-repeat\',\'background-size\': \'cover\'}"></div>-->\n                <div class="cell-title">{{app.title}}</div>\n                <button class="cell-button">下载</button>\n            </div>\n        </div>\n    </ion-item>\n</ion-content>'/*ion-inline-end:"/Users/alex/Documents/Mobile_Development/labapp-mobile/src/pages/detail/appDetail.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__app_apps_service__["a" /* appsService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__app_apps_service__["a" /* appsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_apps_service__["a" /* appsService */]) === "function" && _e || Object])
], appDetailPage);

var appDetailPage_1, _a, _b, _c, _d, _e;
//# sourceMappingURL=appDetail.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appsService; });
/**
 * Created by alex on 11/11/2017.
 */
var appsService = (function () {
    function appsService() {
    }
    appsService.prototype.getApps = function () {
        return Array.from({ length: 5 }, function (v, i) { return i; }).map(function (index) {
            return {
                image: '../assets/imgs/appImage' + index + '.png',
                title: "\u9AD8\u4E2D\u5149\u5B66" + index + "-\u4EFF\u771F\u7269\u7406\u5B9E\u9A8C\u5BA4",
                period: '初中',
                downTotal: index
            };
        });
    };
    appsService.prototype.getDesignatedApps = function (n1, n2) {
        return Array.of(n1, n2).map(function (index) {
            return {
                image: '../assets/imgs/appImage' + index + '.png',
                title: "\u9AD8\u4E2D\u5149\u5B66" + index + "-\u4EFF\u771F\u7269\u7406\u5B9E\u9A8C\u5BA4",
                period: '初中',
                downTotal: index
            };
        });
    };
    appsService.prototype.getDefaultNumberApps = function (n1, n2, n3) {
        if (n3 === void 0) { n3 = 13; }
        return Array.of(n1, n2, n3).map(function (index) {
            return {
                image: '../assets/imgs/appImage' + index + '.png',
                title: "\u9AD8\u4E2D\u5149\u5B66" + index + "-\u4EFF\u771F\u7269\u7406\u5B9E\u9A8C\u5BA4",
                period: '初中',
                downTotal: index
            };
        });
    };
    appsService.prototype.getUnknownNumberApps = function (n1) {
        var restOfNumber = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            restOfNumber[_i - 1] = arguments[_i];
        }
        return Array.of.apply(Array, [n1].concat(restOfNumber)).map(function (index) {
            return {
                image: '../assets/imgs/appImage' + index + '.png',
                title: "\u9AD8\u4E2D\u5149\u5B66" + index + "-\u4EFF\u771F\u7269\u7406\u5B9E\u9A8C\u5BA4",
                period: '初中',
                downTotal: index
            };
        });
    };
    appsService.prototype.getAppsSlow = function () {
        return new Promise(function (res) {
            setTimeout(function () {
                res(Array.from({ length: 17 }, function (v, k) { return k; }).map(function (index) {
                    return {
                        image: '../assets/imgs/appImage' + index + '.png',
                        title: "\u9AD8\u4E2D\u5149\u5B66-" + index + "\u4EFF\u771F\u7269\u7406\u5B9E\u9A8C\u5BA4",
                        period: '高中',
                        downTotal: index
                    };
                }));
            }, 500);
        });
    };
    return appsService;
}());

//# sourceMappingURL=apps.service.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return safeStylePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by alex on 14/11/2017.
 */


var safeStylePipe = (function () {
    function safeStylePipe(domSanitizer) {
        this.domSanitizer = domSanitizer;
    }
    safeStylePipe.prototype.transform = function (value) {
        return this.domSanitizer.bypassSecurityTrustStyle(value);
    };
    return safeStylePipe;
}());
safeStylePipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({ name: 'safeStyle' }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
], safeStylePipe);

//# sourceMappingURL=safeStylePipe.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_heroes__ = __webpack_require__(243);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var HeroService = (function () {
    function HeroService() {
    }
    HeroService.prototype.getHeros = function () {
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_1__mock_heroes__["a" /* HEROS */]);
    };
    HeroService.prototype.getHerosTimeout = function () {
        return new Promise(function (resolve) { return setTimeout(function () { resolve(__WEBPACK_IMPORTED_MODULE_1__mock_heroes__["a" /* HEROS */]); }, 500); });
    };
    return HeroService;
}());
HeroService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
], HeroService);

//# sourceMappingURL=hero.service.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppShare; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by alex on 15/11/2017.
 */


var AppShare = (function () {
    function AppShare(loadingCtrl, platform) {
        this.loadingCtrl = loadingCtrl;
        this.title = "女装尖货 - 单件月销1.8万";
        this.description = "行业精选女装 好货任你挑";
        this.link = "http://dress.tongedev.cn";
        this.image = "https://mmbiz.qlogo.cn/mmbiz_png/khImeKLbVF7u5qdXdicpapLl9diadj5db6xHxdlVgxmYPxkYOR8WyVgOw4tn3EHEsvd9hlfu7zEpgVLYkLh28Nibg/0?wx_fmt=png";
        if (platform.is('ios')) {
            this.link = "https://itunes.apple.com/cn/app/女装尖货-单件月销1-8万/id1194942857?mt=8";
        }
        else if (platform.is('android')) {
            this.link = "http://a.app.qq.com/o/simple.jsp?pkgname=cn.tongedev.dress";
        }
        else {
            this.link = "http://dress.tongedev.cn";
        }
    }
    AppShare.prototype.wxShare = function (scene) {
        var loading = this.loadingCtrl.create({ showBackdrop: false });
        loading.present();
        try {
            Wechat.share({
                message: {
                    title: this.title,
                    description: this.description,
                    thumb: this.image,
                    mediaTagName: "TEST-TAG-001",
                    messageExt: "",
                    messageAction: "",
                    media: {
                        type: Wechat.Type.WEBPAGE,
                        webpageUrl: this.link
                    }
                },
                scene: scene == 0 ? Wechat.Scene.SESSION : Wechat.Scene.Timeline // share to Timeline
            }, function () {
                // alert("分享成功！");
            }, function (reason) {
                // alert("Failed: " + reason);
            });
        }
        catch (error) {
            console.log(error);
        }
        finally {
            loading.dismiss();
        }
    };
    AppShare.prototype.qqShare = function (scene) {
        var loading = this.loadingCtrl.create({ showBackdrop: false });
        loading.present();
        try {
            var args = {};
            if (scene == 0) {
                args.scene = QQSDK.Scene.QQ; //QQSDK.Scene.QQZone,QQSDK.Scene.Favorite
            }
            else {
                args.scene = QQSDK.Scene.QQZone;
            }
            args.url = this.link;
            args.title = this.title;
            args.description = this.description;
            args.image = this.image;
            QQSDK.shareNews(function () {
                loading.dismiss();
            }, function (failReason) {
                loading.dismiss();
            }, args);
        }
        catch (error) {
            console.log(error);
        }
        finally {
            loading.dismiss();
        }
    };
    return AppShare;
}());
AppShare = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["k" /* Platform */]])
], AppShare);

//# sourceMappingURL=app.share.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(217);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_detail_appDetail__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__hero_service__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pipes_safeStylePipe__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_share__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// import {GeoPage} from '../pages/geo/geo';
// import {HistoryPage} from '../pages/history/history';
// import {ShopIntro} from '../pages/shopIntro/shopIntro';
// import {RecommendPage} from '../pages/recommend/recommend';
// import {TabsPage} from '../pages/tabs/tabs';






var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            // GeoPage,
            // ShopIntro,
            // HistoryPage,
            // RecommendPage,
            // TabsPage,
            __WEBPACK_IMPORTED_MODULE_5__pages_detail_appDetail__["a" /* appDetailPage */],
            __WEBPACK_IMPORTED_MODULE_9__pipes_safeStylePipe__["a" /* safeStylePipe */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], { tabsHideOnSubPages: 'true' }, {
                links: [
                    { loadChildren: '../pages/detail/appDetail.module#appDetailPageModule', name: 'appDetailPage', segment: 'appDetail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/geo/geo.module#GeoPageModule', name: 'GeoPage', segment: 'geo', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/history/history.module#HistoryPageModule', name: 'HistoryPage', segment: 'history', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/recommend/recommend.module#RecommendPageModule', name: 'RecommendPage', segment: 'recommend', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/shopIntro/shopIntro.module#ShopIntroModule', name: 'ShopIntro', segment: 'shopIntro', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] }
                ]
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */]
            // ,GeoPage,
            // ShopIntro,
            // HistoryPage,
            // RecommendPage,
            // TabsPage,
            ,
            // ,GeoPage,
            // ShopIntro,
            // HistoryPage,
            // RecommendPage,
            // TabsPage,
            __WEBPACK_IMPORTED_MODULE_5__pages_detail_appDetail__["a" /* appDetailPage */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_8__hero_service__["a" /* HeroService */],
            __WEBPACK_IMPORTED_MODULE_10__app_share__["a" /* AppShare */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HEROS; });
var HEROS = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
];
//# sourceMappingURL=mock-heroes.js.map

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { TabsPage } from '../pages/tabs/tabs';
var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = 'TabsPage';
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('navRoot'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/alex/Documents/Mobile_Development/labapp-mobile/src/app/app.html"*/'<ion-nav #navRoot [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/alex/Documents/Mobile_Development/labapp-mobile/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ })

},[198]);
//# sourceMappingURL=main.js.map