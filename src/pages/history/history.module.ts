/**
 * Created by alex on 17/11/2017.
 */
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HistoryPage } from './history';

@NgModule({
    declarations: [
        HistoryPage,
    ],
    imports: [IonicPageModule.forChild(HistoryPage)],
    exports: [HistoryPage]
})
export class HistoryPageModule{

}