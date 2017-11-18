/**
 * Created by alex on 11/11/2017.
 */
import { Component } from '@angular/core';
import {NavController, NavParams, AlertController, Events, IonicPage} from 'ionic-angular';
import { appsService } from '../../app/apps.service';
@IonicPage()
@Component({
    selector: 'page-appDetail',
    templateUrl: 'appDetail.html',
    providers: [ appsService ]
})
export class appDetailPage {

    searchPanel: boolean;
    appTitle: string;
    appImage: string;
    apps: object[];

    constructor(private navCtrl:NavController, private navParams: NavParams, private alertCtrl:AlertController,
                private events: Events, private appsService: appsService) {
        this.searchPanel = false;
        this.appTitle = this.navParams.data.appTitle;
        this.appImage = this.navParams.data.appImage;
        appsService.getAppsSlow().then(data => {this.apps = data;});
    }

    pop() {
        this.navCtrl.pop();
        this.events.publish('navChange',{backto: this.navCtrl.getPrevious().component.name});
    }

    openApp(appTitle:string, appImage:string){
        this.navCtrl.push(appDetailPage,{
            appTitle: appTitle,
            appImage: appImage
        });
    }
}
