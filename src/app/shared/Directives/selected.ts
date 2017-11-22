/**
 * Created by alex on 22/11/2017.
 */
import {Directive, ElementRef, Renderer, Input, Output,EventEmitter} from '@angular/core';

@Directive({
    selector: '[selected]'
})
export class Selected{
    selectedButton: string;

    @Input() set selectedChild(button: string){
        if(button !== this.selectedButton && this.children){
            this.children.forEach(child=>{
                if(child.name === this.selectedButton) {
                    this.renderer.setElementStyle(child, 'backgroundColor', 'white');
                    this.renderer.setElementStyle(child, 'color', 'black');
                }
            });

            this.children.forEach(child=>{
                if(child.name === button){
                    this.renderer.setElementStyle(child, 'backgroundColor', 'blue');
                    this.renderer.setElementStyle(child, 'color', 'white');
                }
            });
            this.selectedButton = button;
        }
        this.selectedChildChange.emit(button);
    }

    @Output() selectedChildChange: EventEmitter<any> = new EventEmitter<any>();

    constructor(private el:ElementRef, private renderer: Renderer){}

    ngAfterViewInit(){
        this.children = Array.from(this.el.nativeElement.children);
    }
}