import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { CursoService } from '../../providers/curso-service';
import { Cursodetails } from '../cursodetails/cursodetails';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {

  status: string = "proximos";

  cursosArr: any = [];
  cursosConcluidosArr: any = [];
  cursosProximosArr: any = [];

  constructor(public navCtrl: NavController, public cursoService: CursoService, public modalCtrl: ModalController) {
    this.initializeItems();
  }

  initializeItems() {
    this.cursoService.getCursos().subscribe(
      data => {
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
      }
    );
  }

  openPage(curso) {
    let modal = this.modalCtrl.create(Cursodetails, curso);
    modal.present();
  }

}
