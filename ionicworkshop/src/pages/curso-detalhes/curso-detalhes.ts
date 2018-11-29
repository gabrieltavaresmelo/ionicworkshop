import { Component } from '@angular/core';
import { IonicPage, Platform, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-curso-detalhes',
  templateUrl: 'curso-detalhes.html',
})
export class CursoDetalhesPage {

  curso: any;

  constructor(
      public platform: Platform,
      public params: NavParams,
      public viewCtrl: ViewController
  ) {
    this.curso = params.data;
  }

  ionViewDidLoad() {
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
