import {Component, ElementRef, ViewChild} from '@angular/core';
import {IonicPage, LoadingController} from 'ionic-angular';

import { Hero } from '../../app/hero';
import { HeroService } from '../../app/hero.service';
@IonicPage()
@Component({
    selector: 'page-geo',
    templateUrl: 'geo.html'
})
export class GeoPage {
    @ViewChild('myForm') myForm: ElementRef;

    private heroes: Hero[];

    // private options =[ '小学', '初中', '高中', '幼儿', '全部', '初中/高中'];
    private grades = ['Primary', 'Junior', 'Senior', 'Nursery', 'All', 'Middle'];
    private platforms = ['Android', 'iOS', 'Win'];

    private criteria = ['Default', 'Latest', 'Popularity'];

    private translations = {
        'Primary': '小学',
        'Junior': '初中',
        'Senior': '高中',
        'Nursery': '幼儿',
        'All': '全部',
        'Middle':  '初中/高中'
    };

    private selection:object = {
        grade: 'All',
        platform: 'All'
    };

    logForm() {
        console.log(this.selection)
    }

    resetForm(){
        this.selection = {
            grade: null,
            platform: null
        };
    }
    setGrade(v: string){
        this.selection.grade = v;
    }

    setPlatform(v:string){
        this.selection.platform = v;
    }

    private order = {
        orderBy: 'Default'
    }

    logForm2() {
        console.log(this.order);
    }

    setOrder(v: string){
        this.order.orderBy = v;
    }

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

    ngAfterViewInit() {
        //console.log(this.myForm);
    }
}
