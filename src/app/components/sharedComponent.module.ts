/**
 * Created by alex on 22/11/2017.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FloatButtonSet } from './floatbuttonset/floatbuttonset';
import { FilterPanelPage } from './filterPanel/filterPanel';
import { IonicModule } from 'ionic-angular';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        FloatButtonSet,
        //FilterPanelPage
    ],
    exports: [
        CommonModule, FloatButtonSet,
        //FilterPanelPage
    ]
})
export class SharedComponentModule{

}