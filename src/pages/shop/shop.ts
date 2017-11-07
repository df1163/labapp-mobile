/**
 * Created by alex on 03/11/2017.
 */
import { Component } from '@angular/core';
import { NavParams} from 'ionic-angular';

@Component({
    selector: 'page-shop',
    templateUrl: 'shop.html'
})
export class ShopPage {
    chatParams = {};

    constructor( navParams: NavParams) {
        console.log('Passed params', navParams.data);
        this.chatParams = navParams.data;
    }
}