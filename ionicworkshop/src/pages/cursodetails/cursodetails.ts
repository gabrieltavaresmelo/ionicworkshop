import { Component } from '@angular/core';
import { ModalController, Platform, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-cursodetails',
  templateUrl: 'cursodetails.html'
})
export class Cursodetails {

  curso: any;

  constructor(
      public platform: Platform,
      public params: NavParams,
      public viewCtrl: ViewController
  ) {
    this.curso = params.data;
  }

  ionViewDidLoad() {
    console.log('Hello Cursodetails Page');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}