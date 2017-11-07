import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

import {Hero} from '../../app/hero';
import {HeroService} from '../../app/hero.service';

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

    constructor(public navCtrl: NavController, private heroService: HeroService) {
        let self = this;
        this.heroService.getHeros().then(data => {
            self.heroes = data;
            console.log(self.heroes);
        });
    }

}
