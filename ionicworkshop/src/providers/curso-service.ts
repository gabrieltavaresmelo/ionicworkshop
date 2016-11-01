import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the CursoService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class CursoService {

  url_base = 'assets/db/'
  url_cursos = this.url_base + 'cursos.json'

  constructor(public http: Http) {
    console.log('Hello CursoService Provider');
  }

  getCursos() {
    return this.http.get(this.url_cursos)
      .map(res => res.json());
  }

}
