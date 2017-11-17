import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';

// import {GeoPage} from '../pages/geo/geo';
// import {HistoryPage} from '../pages/history/history';
// import {ShopIntro} from '../pages/shopIntro/shopIntro';
// import {RecommendPage} from '../pages/recommend/recommend';
// import {TabsPage} from '../pages/tabs/tabs';
import {appDetailPage} from '../pages/detail/appDetail';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {HeroService} from './hero.service';

import {safeStylePipe} from './pipes/safeStylePipe';
import {AppShare} from './app.share';

@NgModule({
    declarations: [
        MyApp,
        // GeoPage,
        // ShopIntro,
        // HistoryPage,
        // RecommendPage,
        // TabsPage,
        appDetailPage,
        safeStylePipe,
        // filterInutSearchPipe,
        // FloatButtonSet
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        IonicModule.forRoot(MyApp, {tabsHideOnSubPages: 'true'})
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        // ,GeoPage,
        // ShopIntro,
        // HistoryPage,
        // RecommendPage,
        // TabsPage,
        appDetailPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        HeroService,
        AppShare
    ]
})
export class AppModule {
}
