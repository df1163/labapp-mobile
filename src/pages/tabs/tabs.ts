import { Component } from '@angular/core';

import { GeoPage } from '../geo/geo';
import { ShopPage } from '../shop/shop';
import { HistoryPage } from '../history/history';
import { RecommendPage } from '../recommend/recommend';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  searchPanel: boolean;
  myInput = "";

  chatParams : {
    user1: 'Admin',
    user2: 'ionic'
  };

  tab1Root = RecommendPage;
  tab2Root = ShopPage;
  tab3Root = HistoryPage;
  tab4Root = GeoPage;

  constructor() {
    this.searchPanel = false;
  }

  returnBack() {
    this.searchPanel = !this.searchPanel;
    this.myInput = '';
  }

  onInput(ev: any) {
    alert("Inputted: " + ev.target.value + ', Model value is: ' + this.myInput);
  }

  onCancel(ev: any) {
    alert('Removed ' + this.myInput + ' from search box');
  }
}
