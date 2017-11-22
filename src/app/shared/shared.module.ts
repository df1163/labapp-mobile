import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { filterInputSearchPipe } from './pipes/filterInputSearchPipe';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        filterInputSearchPipe
    ],
    exports: [
        CommonModule, filterInputSearchPipe
    ]
})
export class SharedModule{

}