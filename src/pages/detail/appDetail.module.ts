/**
 * Created by alex on 18/11/2017.
 */
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { appDetailPage } from './appDetail';
import {safeStylePipe} from "../../app/pipes/safeStylePipe";

@NgModule({
    declarations: [
        appDetailPage,
        safeStylePipe
    ],
    imports: [IonicPageModule.forChild(appDetailPage)],
    exports: [appDetailPage]
})
export class appDetailPageModule{

}