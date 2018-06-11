import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ImageViewerController } from 'ionic-img-viewer';

@IonicPage()
@Component({
  selector: 'page-img',
  templateUrl: 'img.html',
})
export class ImgPage {
  IMAGE_URL: any;
  _imageViewerCtrl: ImageViewerController;
  constructor(public navCtrl: NavController, public navParams: NavParams, imageViewerCtrl: ImageViewerController) {
    this._imageViewerCtrl = imageViewerCtrl;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ImgPage');
    this.IMAGE_URL = "assets/imgs/logo.png";
  }
  presentImage(myImage) {
    const imageViewer = this._imageViewerCtrl.create(myImage);
    imageViewer.present();

    // setTimeout(() => imageViewer.dismiss(), 1000);
    // imageViewer.onDidDismiss(() => alert('Viewer dismissed'));
  }
}
