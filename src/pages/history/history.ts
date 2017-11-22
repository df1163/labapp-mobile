import { Component } from '@angular/core';
import { Events, IonicPage, NavController} from 'ionic-angular';
import { appsService } from '../../app/apps.service';
@IonicPage()
@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
  providers: [ appsService ]
})
export class HistoryPage {
  private apps: object[];
  private value: string = "";

  constructor(public navCtrl: NavController, public appsService: appsService, public events: Events) {
    this.apps = appsService.getUnknownNumberApps(3,9,13,14,15,16);

    this.events.subscribe('SearchCriteriaChange',(data) => {
      this.value = data.searchCriteria;
    });
  }

  ngOnDestroy(){
    this.events.unsubscribe('SearchCriteriaChange');
  }

}
