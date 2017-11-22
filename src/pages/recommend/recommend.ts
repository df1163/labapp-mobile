import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavController, LoadingController, Events, Content, NavParams, IonicPage } from 'ionic-angular';

import { appsService } from '../../app/apps.service';
import { appDetailPage } from '../detail/appDetail';
// import { Element } from '@angular/compiler';

@IonicPage()
@Component({
    selector: 'page-recommend',
    templateUrl: 'recommend.html',
    providers: [appsService]
    // providers: [{provide: appsService, useClass: appsService}]
})
export class RecommendPage {

    // @ViewChild(Content) content: Content;
    @ViewChild('container') container: ElementRef;
    elem: HTMLElement;
    apps: any;
    showCriteria: string = 'none';
    value: string = "";

    constructor(public navCtrl: NavController, private appsService: appsService, private ldCtl: LoadingController,
                private events: Events, private navParams:NavParams) {

        let loading = ldCtl.create({
            content: 'Loading apps, please wait'
        });

        loading.present();

        appsService.getAppsSlow().then(data => {
            this.apps = data;
            loading.dismiss();
        });
        
        this.events.subscribe('SearchCriteriaChange',(data) => {
            this.value = data.searchCriteria;
        });
    }

    pushTestPage(appTitle: string, appImage: string) {
        this.navCtrl.push('appDetailPage', {
            appTitle: appTitle,
            appImage: appImage
        });

        this.events.publish('ExitRootPage');
    }

    ngOnChanges() {
        // console.log('ngOnChanges!!!!');
    }

    ngOnInit() {
        // console.log('ngOnInit!!!!');
    }

    ngDoCheck() {
        // console.log('ngDoCheck！');
    }

    ngAfterContentInit(){
        // console.log('ngAfterContentInit');
    }

    handlerScroll(this){
        this.showCriteria = 'static';
    }

    ngAfterContentChecked(){
        // console.log('ngAfterContentChecked');
        // if(this.elem){
        //     this.elem.removeEventListener('scroll', ()=> {});
        //     setTimeout(()=>{this.showCriteria = false},3000);
        // }
    }

    ngAfterViewInit() {
        this.elem = <HTMLElement><any>document.getElementsByClassName('scroll-content')[0];
        this.elem.addEventListener('touchstart', ()=>{
            this.showCriteria = 'static';
            setTimeout(()=>{this.elem.removeEventListener('touchend', ()=>{});this.showCriteria = 'none'}, 3000);
        });

    }
    ngAfterViewChecked(){
        //console.log('ngAfterViewChecked');
    }

    ngOnDestory(){
        // console.log('ngOnDestory');
        this.events.unsubscribe('SearchCriteriaChange');
    }

}
