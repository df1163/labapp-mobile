import { Component } from '@angular/core';
import { NavController, Events, ActionSheetController, IonicPage } from 'ionic-angular';

import { GeoPage } from '../geo/geo';
import { ShopIntro } from '../shopIntro/shopIntro';
import { HistoryPage } from '../history/history';
import { RecommendPage } from '../recommend/recommend';

import { fadeIn } from '../../app/animations/fadeIn';
import { slideUp } from '../../app/animations/slideUp';

@Component({
    selector: 'page-tabs',
    templateUrl: 'tabs.html',
    animations: [ fadeIn, slideUp ]
})
export class TabsPage {

    searchPanel: boolean;
    appDetail: boolean;
    myInput:string = "";

    chatParams: {
        user1: 'Admin',
        user2: 'ionic'
    };

    tab1Root = RecommendPage;
    tab2Root = ShopIntro;
    tab3Root = HistoryPage;
    tab4Root = GeoPage;

    constructor(private navCtrl:NavController, private events: Events, private actCtrl: ActionSheetController) {
        this.searchPanel = false;
        this.appDetail = false;

        this.events.subscribe("navChange", (data) => {
            if(data.backto === 'RecommendPage'){
                this.appDetail = false;
            }
        });

        this.events.subscribe('ExitRootPage',  () => {
            this.appDetail = true;
        })
    }

    returnBack() {
        this.searchPanel = !this.searchPanel;
        this.myInput = '';
    }

    onInput(ev: any) {
        this.events.publish('SearchCriteriaChange',{searchCriteria: this.myInput});
    }

    onCancel(ev: any) {
        alert('Removed ' + this.myInput + ' from search box');
        alert(this.myInput);
    }
}
