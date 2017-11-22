/**
 * Created by alex on 17/11/2017.
 */
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecommendPage } from './recommend';
import { SharedModule } from '../../app/shared/shared.module';
import { SharedComponentModule } from '../../app/components/sharedComponent.module';

@NgModule({
    declarations: [
        RecommendPage,
    ],
    imports: [
        SharedModule,
        SharedComponentModule,
        IonicPageModule.forChild(RecommendPage)
    ],
    exports: [RecommendPage]
})
export class RecommendPageModule{

}