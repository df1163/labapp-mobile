import { Component } from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import { appsService } from '../../app/apps.service';

@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
  providers: [ appsService ]
})
export class HistoryPage {
  private apps: object[];

  constructor(public navCtrl: NavController, public appsService: appsService) {
    this.apps = appsService.getUnknownNumberApps(3,9,13,14,15,16);
    console.log(this.apps);
  }

}
