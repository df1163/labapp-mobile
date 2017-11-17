/**
 * Created by alex on 17/11/2017.
 */
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShopIntro } from './shopIntro';

@NgModule({
    declarations: [
        ShopIntro,
    ],
    imports: [IonicPageModule.forChild(ShopIntro)],
    exports: [ShopIntro]
})
export class ShopIntroModule{

}