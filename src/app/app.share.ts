/**
 * Created by alex on 15/11/2017.
 */
import { LoadingController, Platform } from 'ionic-angular';
import { Injectable } from '@angular/core';

declare var Wechat;
declare var QQSDK;

@Injectable()
export class AppShare{
    title: string = "女装尖货 - 单件月销1.8万";
    description: string = "行业精选女装 好货任你挑";
    link: string = "http://dress.tongedev.cn";
    image: string = "https://mmbiz.qlogo.cn/mmbiz_png/khImeKLbVF7u5qdXdicpapLl9diadj5db6xHxdlVgxmYPxkYOR8WyVgOw4tn3EHEsvd9hlfu7zEpgVLYkLh28Nibg/0?wx_fmt=png";

    constructor(public loadingCtrl: LoadingController, platform: Platform){
        if (platform.is('ios')) {
            this.link = "https://itunes.apple.com/cn/app/女装尖货-单件月销1-8万/id1194942857?mt=8";
        }
        else if (platform.is('android')) {
            this.link = "http://a.app.qq.com/o/simple.jsp?pkgname=cn.tongedev.dress";
        } else {
            this.link = "http://dress.tongedev.cn";
        }
    }

    wxShare(scene:any) {
        var loading = this.loadingCtrl.create({ showBackdrop: false });
        loading.present();
        try {
            Wechat.share({
                message: {
                    title: this.title,
                    description: this.description,
                    thumb: this.image,
                    mediaTagName: "TEST-TAG-001",
                    messageExt: "",  // 这是第三方带的测试字段
                    messageAction: "", // <action>dotalist</action>
                    media: {
                        type: Wechat.Type.WEBPAGE,
                        webpageUrl: this.link
                    }
                },
                scene: scene == 0 ? Wechat.Scene.SESSION : Wechat.Scene.Timeline  // share to Timeline
            }, function () {
                // alert("分享成功！");
            }, function (reason) {
                // alert("Failed: " + reason);
            });
        } catch (error) {
            console.log(error);
        } finally {
            loading.dismiss();
        }
    }

    qqShare(scene:any) {
        var loading = this.loadingCtrl.create({ showBackdrop: false });
        loading.present();
        try {
            var args: any = {};
            if (scene == 0) {
                args.scene = QQSDK.Scene.QQ;//QQSDK.Scene.QQZone,QQSDK.Scene.Favorite
            }
            else {
                args.scene = QQSDK.Scene.QQZone;
            }
            args.url = this.link;
            args.title = this.title;
            args.description = this.description;
            args.image = this.image;
            QQSDK.shareNews(function () {
                loading.dismiss();
            }, function (failReason) {
                loading.dismiss();
            }, args);
        } catch (error) {
            console.log(error);
        } finally {
            loading.dismiss();
        }
    }
}