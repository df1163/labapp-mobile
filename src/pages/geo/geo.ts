import { Component } from '@angular/core';
import {IonicPage, LoadingController} from 'ionic-angular';

import { Hero } from '../../app/hero';
import { HeroService } from '../../app/hero.service';

@Component({
    selector: 'page-geo',
    templateUrl: 'geo.html'
})
export class GeoPage {
    heroes: Hero[];

    pepperoni: string;
    mushrooms: string;

    openModal() {
        alert('Opened!!');
    }

    output(event: any) {
        alert('toggle ' + event);
    }

    constructor(private heroService: HeroService, private loadingCtrl: LoadingController) {
        // instant version
        // this.heroService.getHeros().then(data => {
        //     self.heroes = data;
        //     // console.log(self.heroes);
        // });

        let loading = loadingCtrl.create({
            content: 'Please wait...'
        });

        loading.present();

        console.time('Running costs');
        // slow version
        heroService.getHerosTimeout().then( data=> {
            this.heroes = data;
            console.timeEnd('Running costs');
            loading.dismiss();
        });

    }

    // presentLoadingDefault() {
    //     let loading = this.loadingCtrl.create({
    //         content: 'Please wait...'
    //     });
    //
    //     loading.present();
    //
    //     setTimeout(() => {
    //         loading.dismiss();
    //     }, 5000);
    // }
    //
    // presentLoadingCustom() {
    //     let loading = this.loadingCtrl.create({
    //         spinner: 'hide',
    //         content: `
    //   <div class="custom-spinner-container">
    //     <div class="custom-spinner-box"></div>
    //   </div>`,
    //         duration: 5000
    //     });
    //
    //     loading.onDidDismiss(() => {
    //         console.log('Dismissed loading');
    //     });
    //
    //     loading.present();
    // }
    //
    // presentLoadingText() {
    //     let loading = this.loadingCtrl.create({
    //         spinner: 'hide',
    //         content: 'Loading Please Wait...'
    //     });
    //
    //     loading.present();
    //
    //     setTimeout(() => {
    //         this.nav.push(Page2);
    //     }, 1000);
    //
    //     setTimeout(() => {
    //         loading.dismiss();
    //     }, 5000);
    // }

}
