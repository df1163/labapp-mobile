/**
 * Created by alex on 17/11/2017.
 */
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecommendPage } from './recommend';
import { SharedModule } from '../../app/shared/shared.module';
import { FloatButtonSet } from '../../app/components/floatbuttonset/floatbuttonset';

@NgModule({
    declarations: [
        RecommendPage,
        FloatButtonSet
    ],
    imports: [
        SharedModule,
        IonicPageModule.forChild(RecommendPage)
    ],
    exports: [RecommendPage]
})
export class RecommendPageModule{

}