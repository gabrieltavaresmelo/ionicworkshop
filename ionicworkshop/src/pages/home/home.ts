import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { CursoProvider } from '../../providers/curso/curso';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  status: string = "proximos";

  cursosArr: any = [];
  cursosConcluidosArr: any = [];
  cursosProximosArr: any = [];

  subscribeCursos;

  constructor(public navCtrl: NavController, public cursoService: CursoProvider, public modalCtrl: ModalController) {
  }
  
  ionViewDidLoad() {
    this.initializeItems();
  }
  
  ionViewDidUnload() {
    if(this.subscribeCursos){
      this.subscribeCursos.unsubscribe();
    }
  }

  initializeItems() {
    this.subscribeCursos = this.cursoService.getCursos().subscribe(data => {
      this.cursosArr = data;

      let now = new Date().getTime();
      
      for (let curso of this.cursosArr) {
        let dtStr = curso.dt_realizacao;
        let dtArr = dtStr.split("/");
        let dt = new Date(dtArr[2], dtArr[1], dtArr[0],0,0,0,0);
        let dtMilis = dt.getTime();

        if(dtMilis < now){
          this.cursosConcluidosArr.push(curso);
        } else {
          this.cursosProximosArr.push(curso);
        }
      }
    });
  }

  openPage(curso) {
    let modal = this.modalCtrl.create('CursoDetalhesPage', curso);
    modal.present();
  }

}
