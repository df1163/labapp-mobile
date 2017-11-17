/**
 * Created by alex on 17/11/2017.
 */
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabsPage } from './tabs';

@NgModule({
    declarations: [
        TabsPage,
    ],
    imports: [IonicPageModule.forChild(TabsPage)],
    exports: [TabsPage]
})
export class TabsPageModule{

}