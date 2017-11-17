/**
 * Created by alex on 17/11/2017.
 */
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecommendPage } from './recommend';
import { filterInutSearchPipe } from '../../app/pipes/filterInutSearchPipe';
import { FloatButtonSet } from '../../app/components/floatbuttonset/floatbuttonset';

@NgModule({
    declarations: [
        RecommendPage,
        filterInutSearchPipe,
        FloatButtonSet
    ],
    imports: [IonicPageModule.forChild(RecommendPage)],
    exports: [RecommendPage]
})
export class RecommendPageModule{

}