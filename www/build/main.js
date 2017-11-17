webpackJsonp([0],{

/***/ 100:
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

/***/ 109:
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
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 150:
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
webpackEmptyAsyncContext.id = 150;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_animations_fadeIn__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_animations_slideUp__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__recommend_recommend__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shopIntro_shopIntro__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__history_history__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__geo_geo__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var TabsPage = (function () {
    function TabsPage(navCtrl, events, actCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.events = events;
        this.actCtrl = actCtrl;
        this.myInput = "";
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_4__recommend_recommend__["a" /* RecommendPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_5__shopIntro_shopIntro__["a" /* ShopIntro */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_6__history_history__["a" /* HistoryPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_7__geo_geo__["a" /* GeoPage */];
        this.searchPanel = false;
        this.appDetail = false;
        this.events.subscribe("navChange", function (data) {
            if (data.backto === 'RecommendPage') {
                _this.appDetail = false;
            }
        });
        this.events.subscribe('ExitRootPage', function () {
            _this.appDetail = true;
        });
    }
    TabsPage.prototype.returnBack = function () {
        this.searchPanel = !this.searchPanel;
        this.myInput = '';
    };
    TabsPage.prototype.onInput = function (ev) {
        this.events.publish('SearchCriteriaChange', { searchCriteria: this.myInput });
    };
    TabsPage.prototype.onCancel = function (ev) {
        alert('Removed ' + this.myInput + ' from search box');
        alert(this.myInput);
    };
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-tabs',template:/*ion-inline-start:"/Users/alex/Documents/Mobile_Development/labapp-mobile/src/pages/tabs/tabs.html"*/'<ion-header>\n    <ion-title>\n        应用商城\n    </ion-title>\n</ion-header>\n\n<ion-toolbar [@slideUp]=\'appDetail ? "leave" : "origin" \'>\n    <ion-grid>\n        <ion-row>\n            <ion-col col-11 *ngIf="!searchPanel">\n                <ion-item @fadeIn id="avatarPanel">\n                    <ion-avatar item-start>\n                        <img src="/img/personal-head-visitor.png" width="50px" height="50px">\n                    </ion-avatar>\n                    <h2>普陀区教育局</h2>\n                    <p>HSJC</p>\n                </ion-item>\n            </ion-col>\n            <ion-col col-1 *ngIf="searchPanel">\n                <ion-icon name="arrow-back" (click)="returnBack()" @fadeIn></ion-icon>\n            </ion-col>\n            <ion-col col-10 *ngIf="searchPanel">\n                <ion-searchbar @fadeIn id=\'search\' animated="true" placeholder="输入您想搜索的内容" (ionInput)="onInput($event)" [(ngModel)]="myInput" [showCancelButton]="false" (ionCancel)="onCancel($event)">\n                </ion-searchbar>\n            </ion-col>\n            <ion-col col-1>\n                <ion-icon name="search" left ios="ios-search" md="md-search" (click)="returnBack()"></ion-icon>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n\n</ion-toolbar>\n\n<ion-tabs selectedIndex="0" tabbarLayout="icon-left" tabsHighlight="true" tabsPlacement="top">\n    <!--<ion-tabs selectedIndex="0" tabbarLayout="icon-left" tabsPlacement="top">-->\n    <ion-tab [root]="tab1Root" tabTitle="云推送应用" [rootParams]="{inputValue: myInput}"></ion-tab>\n    <ion-tab [root]="tab2Root" tabTitle="商城简介"></ion-tab>\n    <ion-tab [root]="tab3Root" tabTitle="我的应用"></ion-tab>\n    <ion-tab [root]="tab4Root" tabTitle="地理位置"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"/Users/alex/Documents/Mobile_Development/labapp-mobile/src/pages/tabs/tabs.html"*/,
        animations: [__WEBPACK_IMPORTED_MODULE_2__app_animations_fadeIn__["a" /* fadeIn */], __WEBPACK_IMPORTED_MODULE_3__app_animations_slideUp__["a" /* slideUp */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecommendPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_apps_service__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__detail_appDetail__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { Element } from '@angular/compiler';
var RecommendPage = (function () {
    function RecommendPage(navCtrl, appsService, ldCtl, events, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.appsService = appsService;
        this.ldCtl = ldCtl;
        this.events = events;
        this.navParams = navParams;
        this.showCriteria = 'none';
        this.value = "";
        var loading = ldCtl.create({
            content: 'Loading apps, please wait'
        });
        loading.present();
        appsService.getAppsSlow().then(function (data) {
            _this.apps = data;
            loading.dismiss();
        });
        this.events.subscribe('SearchCriteriaChange', function (data) {
            _this.value = data.searchCriteria;
        });
    }
    RecommendPage.prototype.pushTestPage = function (appTitle, appImage) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__detail_appDetail__["a" /* appDetailPage */], {
            appTitle: appTitle,
            appImage: appImage
        });
        this.events.publish('ExitRootPage');
    };
    RecommendPage.prototype.ngOnChanges = function () {
        // console.log('ngOnChanges!!!!');
    };
    RecommendPage.prototype.ngOnInit = function () {
        // console.log('ngOnInit!!!!');
    };
    RecommendPage.prototype.ngDoCheck = function () {
        // console.log('ngDoCheck！');
    };
    RecommendPage.prototype.ngAfterContentInit = function () {
        // console.log('ngAfterContentInit');
    };
    RecommendPage.prototype.handlerScroll = function () {
        this.showCriteria = 'static';
    };
    RecommendPage.prototype.ngAfterContentChecked = function () {
        // console.log('ngAfterContentChecked');
        // if(this.elem){
        //     this.elem.removeEventListener('scroll', ()=> {});
        //     setTimeout(()=>{this.showCriteria = false},3000);
        // }
    };
    RecommendPage.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.elem = document.getElementsByClassName('scroll-content')[0];
        this.elem.addEventListener('scroll', function () {
            _this.showCriteria = 'static';
            setTimeout(function () { _this.elem.removeEventListener('scroll', function () { }); _this.showCriteria = 'none'; }, 3000);
        });
    };
    RecommendPage.prototype.ngAfterViewChecked = function () {
        //console.log('ngAfterViewChecked');
    };
    RecommendPage.prototype.ngOnDestory = function () {
        // console.log('ngOnDestory');
    };
    return RecommendPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('container'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
], RecommendPage.prototype, "container", void 0);
RecommendPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-recommend',template:/*ion-inline-start:"/Users/alex/Documents/Mobile_Development/labapp-mobile/src/pages/recommend/recommend.html"*/'<ion-content #container no-border>\n    <ion-list id="appList" no-border>\n\n        <ion-item *ngFor="let app of apps | inputSearch : \'title\' : value" (click)="pushTestPage(app.title, app.image)">\n            <ion-avatar item-left>\n                <img src={{app.image}}>\n            </ion-avatar>\n            <h2>{{app.title}}</h2>\n            <p>{{app.period}} | {{app.downTotal}}次下载</p>\n            <p>2017-07-26</p>\n            <button ion-button clear item-right>下载</button>\n        </ion-item>\n\n        <!--<ion-item>-->\n        <!--<ion-label>Pepperoni</ion-label>-->\n        <!--<ion-toggle [(ngModel)]="pepperoni" (ionChange)="output(pepperoni)"></ion-toggle>-->\n        <!--</ion-item>-->\n\n        <!--<ion-item>-->\n        <!--<ion-label>Sausage</ion-label>-->\n        <!--<ion-toggle [(ngModel)]="sausage" disabled="true"></ion-toggle>-->\n        <!--</ion-item>-->\n\n        <!--<ion-item>-->\n        <!--<ion-label>Mushrooms</ion-label>-->\n        <!--<ion-toggle [(ngModel)]="mushrooms" (ionChange)="output(mushrooms)"></ion-toggle>-->\n        <!--</ion-item>-->\n    </ion-list>\n    <float-buttonset [b1]="\'筛选\'" [b2]="\'排序\'" *ngIf="showCriteria === \'static\'"></float-buttonset>\n    <!-- \n    <float-buttonset [b1]="\'筛选\'" [b2]="\'排序\'" [(displayElements)]="showCriteria"></float-buttonset> -->\n\n</ion-content>'/*ion-inline-end:"/Users/alex/Documents/Mobile_Development/labapp-mobile/src/pages/recommend/recommend.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__app_apps_service__["a" /* appsService */]]
        // providers: [{provide: appsService, useClass: appsService}]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__app_apps_service__["a" /* appsService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], RecommendPage);

//# sourceMappingURL=recommend.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_apps_service__ = __webpack_require__(100);
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */], __WEBPACK_IMPORTED_MODULE_2__app_apps_service__["a" /* appsService */]])
], appDetailPage);

var appDetailPage_1;
//# sourceMappingURL=appDetail.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShopIntro; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_share__ = __webpack_require__(198);
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
 * Created by alex on 03/11/2017.
 */



var ShopIntro = (function () {
    function ShopIntro(navParams, el, appShare, actionSheetCtrl) {
        this.navParams = navParams;
        this.el = el;
        this.appShare = appShare;
        this.actionSheetCtrl = actionSheetCtrl;
    }
    ShopIntro.prototype.ngAfterViewInit = function () {
        console.log(this.tutorialVideo.nativeElement.attributes);
        console.log(this.exhibVideo.nativeElement.attributes);
    };
    ShopIntro.prototype.share = function (ev) {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: '分享',
            buttons: [
                {
                    text: 'QQ好友',
                    handler: function () {
                        _this.appShare.qqShare(0);
                    }
                },
                {
                    text: 'QQ空间',
                    handler: function () {
                        _this.appShare.qqShare(1);
                    }
                },
                {
                    text: '微信好友',
                    handler: function () {
                        _this.appShare.wxShare(0);
                    }
                },
                {
                    text: '朋友圈',
                    handler: function () {
                        _this.appShare.wxShare(1);
                    }
                },
                {
                    text: '取消',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    return ShopIntro;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('tutorial'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
], ShopIntro.prototype, "tutorialVideo", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('exhib'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
], ShopIntro.prototype, "exhibVideo", void 0);
ShopIntro = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-shop',template:/*ion-inline-start:"/Users/alex/Documents/Mobile_Development/labapp-mobile/src/pages/shopIntro/shopIntro.html"*/'<ion-content>\n    <ion-list>\n        <ion-card>\n            <ion-card-header>使用说明</ion-card-header>\n            <ion-item>\n                <video #tutorial src="../assets/videos/testV.mp4" controls="controls">\n                    您的浏览器不支持 video 标签\n                </video>\n            </ion-item>\n        </ion-card>\n        <ion-card>\n            <ion-card-header>学生作品</ion-card-header>\n            <ion-item>\n                <video #exhib src="../assets/videos/testV2.mp4" controls="controls">\n                    您的浏览器不支持 video 标签\n                </video>\n            </ion-item>\n        </ion-card>\n        <ion-card><button ion-button (click)="share($event)"><ion-icon name="share"></ion-icon></button></ion-card>\n    </ion-list>\n\n</ion-content>'/*ion-inline-end:"/Users/alex/Documents/Mobile_Development/labapp-mobile/src/pages/shopIntro/shopIntro.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_2__app_app_share__["a" /* AppShare */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
], ShopIntro);

//# sourceMappingURL=shopIntro.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppShare; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(15);
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["j" /* Platform */]])
], AppShare);

//# sourceMappingURL=app.share.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_apps_service__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HistoryPage = (function () {
    function HistoryPage(navCtrl, appsService) {
        this.navCtrl = navCtrl;
        this.appsService = appsService;
        this.apps = appsService.getUnknownNumberApps(3, 9, 13, 14, 15, 16);
        console.log(this.apps);
    }
    return HistoryPage;
}());
HistoryPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-history',template:/*ion-inline-start:"/Users/alex/Documents/Mobile_Development/labapp-mobile/src/pages/history/history.html"*/'<ion-content>\n    <ion-list>\n        <ion-list-header>\n            下载历史\n            <ion-icon name="ionic"></ion-icon>\n        </ion-list-header>\n        <ion-item *ngFor="let app of apps">\n            <ion-avatar item-left="">\n                <img src={{app.image}}>\n            </ion-avatar>\n            {{app.title}}\n            <ion-badge item-end="">{{app.downTotal}}人下载</ion-badge>\n            <ion-icon name="ionic" item-end></ion-icon>\n        </ion-item>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/alex/Documents/Mobile_Development/labapp-mobile/src/pages/history/history.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__app_apps_service__["a" /* appsService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__app_apps_service__["a" /* appsService */]])
], HistoryPage);

//# sourceMappingURL=history.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_hero_service__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GeoPage = (function () {
    function GeoPage(heroService, loadingCtrl) {
        // instant version
        // this.heroService.getHeros().then(data => {
        //     self.heroes = data;
        //     // console.log(self.heroes);
        // });
        var _this = this;
        this.heroService = heroService;
        this.loadingCtrl = loadingCtrl;
        var loading = loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        console.time('Running costs');
        // slow version
        heroService.getHerosTimeout().then(function (data) {
            _this.heroes = data;
            console.timeEnd('Running costs');
            loading.dismiss();
        });
    }
    GeoPage.prototype.openModal = function () {
        alert('Opened!!');
    };
    GeoPage.prototype.output = function (event) {
        alert('toggle ' + event);
    };
    return GeoPage;
}());
GeoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-geo',template:/*ion-inline-start:"/Users/alex/Documents/Mobile_Development/labapp-mobile/src/pages/geo/geo.html"*/'<ion-content>\n    <!--<ion-item>-->\n    <!--<ion-card>-->\n    <!--<ion-card-header>-->\n    <!--Card Header-->\n    <!--</ion-card-header>-->\n    <!--<ion-card-content>-->\n    <!--&lt;!&ndash; Add card content here! &ndash;&gt;-->\n    <!--asdfsadsfa-->\n    <!--</ion-card-content>-->\n    <!--</ion-card>-->\n    <!--</ion-item>-->\n    <!--<ion-item>-->\n    <!--<ion-label>Pepperoni</ion-label>-->\n    <!--<ion-toggle [(ngModel)]="pepperoni" (ionChange)="output(pepperoni)"></ion-toggle>-->\n    <!--</ion-item>-->\n\n    <!--<ion-item>-->\n    <!--<ion-label>Sausage</ion-label>-->\n    <!--<ion-toggle [(ngModel)]="sausage" disabled="true"></ion-toggle>-->\n    <!--</ion-item>-->\n\n    <!--<ion-item>-->\n    <!--<ion-label>Mushrooms</ion-label>-->\n    <!--<ion-toggle [(ngModel)]="mushrooms" (ionChange)="output(mushrooms)"></ion-toggle>-->\n    <!--</ion-item>-->\n    <ion-list>\n        <ion-item *ngFor="let hero of heroes">\n            <ion-label>{{hero.id}}</ion-label>\n            <ion-label>{{hero.name}}</ion-label>\n        </ion-item>\n    </ion-list>\n\n\n    <ion-fab>\n        <button ion-fab>Buttonsdfs</button>\n    </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/Users/alex/Documents/Mobile_Development/labapp-mobile/src/pages/geo/geo.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__app_hero_service__["a" /* HeroService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
], GeoPage);

//# sourceMappingURL=geo.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_heroes__ = __webpack_require__(275);
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

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(221);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_geo_geo__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_history_history__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_shopIntro_shopIntro__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_recommend_recommend__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_detail_appDetail__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__hero_service__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pipes_safeStylePipe__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_share__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pipes_filterInutSearchPipe__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_floatbuttonset_floatbuttonset__ = __webpack_require__(278);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_geo_geo__["a" /* GeoPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_shopIntro_shopIntro__["a" /* ShopIntro */],
            __WEBPACK_IMPORTED_MODULE_6__pages_history_history__["a" /* HistoryPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_recommend_recommend__["a" /* RecommendPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_detail_appDetail__["a" /* appDetailPage */],
            __WEBPACK_IMPORTED_MODULE_14__pipes_safeStylePipe__["a" /* safeStylePipe */],
            __WEBPACK_IMPORTED_MODULE_16__pipes_filterInutSearchPipe__["a" /* filterInutSearchPipe */],
            __WEBPACK_IMPORTED_MODULE_17__components_floatbuttonset_floatbuttonset__["a" /* FloatButtonSet */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], { tabsHideOnSubPages: 'true' }, {
                links: []
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_geo_geo__["a" /* GeoPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_shopIntro_shopIntro__["a" /* ShopIntro */],
            __WEBPACK_IMPORTED_MODULE_6__pages_history_history__["a" /* HistoryPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_recommend_recommend__["a" /* RecommendPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_detail_appDetail__["a" /* appDetailPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_13__hero_service__["a" /* HeroService */],
            __WEBPACK_IMPORTED_MODULE_15__app_share__["a" /* AppShare */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
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
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/alex/Documents/Mobile_Development/labapp-mobile/src/app/app.html"*/'<ion-nav #navRoot [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/alex/Documents/Mobile_Development/labapp-mobile/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fadeIn; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__(41);

var fadeIn = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* trigger */])('fadeIn', [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* state */])('in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ display: 'none' })),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* transition */])('void => *', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])(300, Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["f" /* keyframes */])([
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ opacity: 0, offset: 0 }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ opacity: 1, offset: 1 })
        ]))
    ]),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* transition */])('* => void', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])(300, Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["f" /* keyframes */])([
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ opacity: 1, offset: 0 }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ opacity: 0, offset: 1 })
        ]))
    ]),
]);
//# sourceMappingURL=fadeIn.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return slideUp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__(41);

var slideUp = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* trigger */])('slideUp', [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* state */])('origin', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ top: 'auto' })),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* state */])('leave', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ top: '-100%' })),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* transition */])('leave => origin', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('180ms ease-in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["f" /* keyframes */])([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ top: '-50%', offset: 0.5 }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ top: '-100%', offset: 1.0 })
    ])))
]);
//# sourceMappingURL=slideUp.js.map

/***/ }),

/***/ 275:
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

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return safeStylePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(22);
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

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return filterInutSearchPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var filterInutSearchPipe = (function () {
    function filterInutSearchPipe() {
    }
    filterInutSearchPipe.prototype.transform = function (items, field, value) {
        if (!items)
            return [];
        if (!value || value.length === 0)
            return items;
        return items.filter(function (item) { return item[field].indexOf(value) !== -1; });
    };
    return filterInutSearchPipe;
}());
filterInutSearchPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({
        name: 'inputSearch'
    })
], filterInutSearchPipe);

//# sourceMappingURL=filterInutSearchPipe.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FloatButtonSet; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
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


var FloatButtonSet = (function () {
    function FloatButtonSet(actionSheetCtrl) {
        this.actionSheetCtrl = actionSheetCtrl;
        this.displayElement = "";
        this.displayElementsChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.b1 = "Filter";
        this.b2 = "Sort";
        this.actionSheet = this.actionSheetCtrl.create({
            buttons: [
                {
                    text: 'Destructive',
                    role: 'destructive',
                    handler: function () {
                        console.log('Destructive clicked');
                    }
                },
                {
                    text: 'Archive',
                    handler: function () {
                        console.log('Archive clicked');
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
    }
    Object.defineProperty(FloatButtonSet.prototype, "displayElements", {
        set: function (displayElemString) {
            this.displayElement = displayElemString;
            this.displayElementsChange.emit(displayElemString);
        },
        enumerable: true,
        configurable: true
    });
    FloatButtonSet.prototype.ngDoCheck = function () {
        // console.log('ngDoCheck！');
        // console.log(this.displayElement);
        // console.log(this.buttonSet.nativeElement);
    };
    FloatButtonSet.prototype.ngAfterViewInit = function () {
        //console.log(`floatButtonSet has changed ${FloatButtonSet.changedNum} times, ${this.buttonSet.nativeElement}`);
    };
    FloatButtonSet.prototype.showSortCriteria = function () {
        this.actionSheet.present();
    };
    FloatButtonSet.prototype.onClick = function (ev) {
        console.log(ev.target);
    };
    FloatButtonSet.prototype.ngOnDestory = function () {
        // if(this.actionSheet){
        //     this.actionSheet = null;
        // }
    };
    return FloatButtonSet;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('buttonSet'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
], FloatButtonSet.prototype, "buttonSet", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
], FloatButtonSet.prototype, "displayElementsChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], FloatButtonSet.prototype, "displayElements", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], FloatButtonSet.prototype, "b1", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], FloatButtonSet.prototype, "b2", void 0);
FloatButtonSet = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'float-buttonset',template:/*ion-inline-start:"/Users/alex/Documents/Mobile_Development/labapp-mobile/src/app/components/floatbuttonset/floatbuttonset.html"*/'<div #buttonSet id="buttonset" [style.display]="displayElem">\n    <button id="filter"><i class="iconfont icon-filter"></i>{{b1}}</button><!--\n　　--><button id="sort" (click)="showSortCriteria()"><i class="iconfont icon-navlist"></i>{{b2}}</button>\n</div>\n'/*ion-inline-end:"/Users/alex/Documents/Mobile_Development/labapp-mobile/src/app/components/floatbuttonset/floatbuttonset.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
], FloatButtonSet);

//# sourceMappingURL=floatbuttonset.js.map

/***/ })

},[202]);
//# sourceMappingURL=main.js.map