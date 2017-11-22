import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { filterInputSearchPipe } from './pipes/filterInputSearchPipe';
import { Selected } from './Directives/selected';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        filterInputSearchPipe,
        Selected
    ],
    exports: [
        CommonModule, filterInputSearchPipe, Selected
    ]
})
export class SharedModule{

}