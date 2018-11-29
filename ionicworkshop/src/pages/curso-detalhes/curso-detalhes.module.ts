import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CursoDetalhesPage } from './curso-detalhes';

@NgModule({
  declarations: [
    CursoDetalhesPage,
  ],
  imports: [
    IonicPageModule.forChild(CursoDetalhesPage),
  ],
})
export class CursoDetalhesPageModule {}
