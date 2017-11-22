/**
 * Created by alex on 17/11/2017.
 */
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GeoPage } from './geo';

import { SharedModule} from '../../app/shared/shared.module';

@NgModule({
    declarations: [
        GeoPage,
    ],
    imports: [
        SharedModule,
        IonicPageModule.forChild(GeoPage)
    ],
    exports: [GeoPage]
})
export class GeoPageModule{

}