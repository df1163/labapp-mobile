import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {HeroService} from './hero.service';

import {AppShare} from './app.share';


@NgModule({
    declarations: [
        MyApp,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        IonicModule.forRoot(MyApp, {tabsHideOnSubPages: 'true'})
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        //MyApp,
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
