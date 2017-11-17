/**
 * Created by alex on 14/11/2017.
 */
import {Component, Input, ElementRef, ViewChild, Output, EventEmitter} from '@angular/core';
import { ActionSheetController } from 'ionic-angular';

@Component({
    selector: 'float-buttonset',
    templateUrl: 'floatbuttonset.html'
})
export class FloatButtonSet{
    @ViewChild('buttonSet') buttonSet: ElementRef;

    displayElement : string = "";
    @Output() displayElementsChange: EventEmitter<string> = new EventEmitter<string>();
    @Input() set displayElements(displayElemString: string){
        this.displayElement = displayElemString;
        this.displayElementsChange.emit(displayElemString);
    }

    actionSheet:any;

    @Input() b1:string = "Filter";
    @Input() b2:string = "Sort";

    constructor(public actionSheetCtrl: ActionSheetController){

        this.actionSheet = this.actionSheetCtrl.create({
        buttons: [
            {
                text: 'Destructive',
                role: 'destructive',
                handler: () => {
                    console.log('Destructive clicked');
                }
            },
            {
                text: 'Archive',
                handler: () => {
                    console.log('Archive clicked');
                }
            },
            {
                text: 'Cancel',
                role: 'cancel',
                handler: () => {
                    console.log('Cancel clicked');
                }
            }
        ]
       });
    }

    ngDoCheck() {
        // console.log('ngDoCheck！');
        // console.log(this.displayElement);
        // console.log(this.buttonSet.nativeElement);
    }

    ngAfterViewInit(): void {
        //console.log(`floatButtonSet has changed ${FloatButtonSet.changedNum} times, ${this.buttonSet.nativeElement}`);
    }

    showSortCriteria(){
        this.actionSheet.present();
    }

    onClick(ev: any) {
        console.log(ev.target);
    }

    ngOnDestory(){
        // if(this.actionSheet){
        //     this.actionSheet = null;
        // }
    }
}