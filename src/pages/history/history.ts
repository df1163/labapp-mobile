import { Component } from '@angular/core';
import { NavController, Events} from 'ionic-angular';
import { appsService } from '../../app/apps.service';

@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
  providers: [ appsService ]
})
export class HistoryPage {
  private apps: object[];
  private value: string = "";

  constructor(public navCtrl: NavController, public appsService: appsService, public events: Events) {
    //this.apps = appsService.getUnknownNumberApps(3,9,13,14,15,16);
    appsService.getAppsSlow().then(data=>{this.apps = data});

    this.events.subscribe('SearchCriteriaChange',(data) => {
      this.value = data.searchCriteria;
    });
  }

}