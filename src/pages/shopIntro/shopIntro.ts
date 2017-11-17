/**
 * Created by alex on 03/11/2017.
 */
import { Component, ElementRef, ViewChild } from '@angular/core';
import {ActionSheetController, IonicPage, NavParams} from 'ionic-angular';
import { AppShare } from '../../app/app.share';

@Component({
    selector: 'page-shop',
    templateUrl: 'shopIntro.html'
})
export class ShopIntro {

    @ViewChild('tutorial') tutorialVideo: ElementRef;
    @ViewChild('exhib') exhibVideo: ElementRef;

    constructor(private navParams: NavParams, private el: ElementRef, private appShare: AppShare, private actionSheetCtrl: ActionSheetController) {}

    ngAfterViewInit(): void {
        console.log(this.tutorialVideo.nativeElement.attributes);
        console.log(this.exhibVideo.nativeElement.attributes);
    }

    share(ev:any){
        let actionSheet = this.actionSheetCtrl.create({
            title: '分享',
            buttons: [
                {
                    text: 'QQ好友',
                    handler: () => {
                        this.appShare.qqShare(0)
                    }
                },
                {
                    text: 'QQ空间',
                    handler: () => {
                        this.appShare.qqShare(1)
                    }
                },
                {
                    text: '微信好友',
                    handler: () => {
                        this.appShare.wxShare(0)
                    }
                },
                {
                    text: '朋友圈',
                    handler: () => {
                        this.appShare.wxShare(1)
                    }
                },
                {
                    text: '取消',
                    role: 'cancel',
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                }

            ]
        });

        actionSheet.present();
    }
}