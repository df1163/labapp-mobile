import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';

import {GeoPage} from '../pages/geo/geo';
import {HistoryPage} from '../pages/history/history';
import {ShopPage} from '../pages/shop/shop';
import {RecommendPage} from '../pages/recommend/recommend';
import {TabsPage} from '../pages/tabs/tabs';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {HeroService} from './hero.service';

@NgModule({
    declarations: [
        MyApp,
        GeoPage,
        ShopPage,
        HistoryPage,
        RecommendPage,
        TabsPage
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        IonicModule.forRoot(MyApp, {tabsHideOnSubPages: 'true'})
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        GeoPage,
        ShopPage,
        HistoryPage,
        RecommendPage,
        TabsPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        HeroService
    ]
})
export class AppModule {
}
