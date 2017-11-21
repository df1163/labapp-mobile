/**
 * Created by alex on 21/11/2017.
 */
import { Pipe } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({name: 'safeStyle'})
export class safeStylePipe{
    constructor(public domSanitizer: DomSanitizer){}

    transform(value: any){
        return this.domSanitizer.bypassSecurityTrustStyle(value);
    }
}