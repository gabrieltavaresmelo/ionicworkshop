import { environment } from './../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class CursoProvider {

  url_base = 'assets/db/'
  url_cursos = this.url_base + 'cursos.json'
  
  constructor(public http: HttpClient, public afd: AngularFireDatabase) {
  }

  getCursos() {
    return environment.isDebugMode ? this.getCursosLocal() : this.getCursosFirebase();
  }

  getCursosLocal() {
    return this.http.get(this.url_cursos);
  }

  getCursosFirebase() {
    return this.afd.list('/curso', ref => ref.orderByKey()).snapshotChanges()
      .map(changes => changes.map(c => c.payload.val() ));
  }

}
