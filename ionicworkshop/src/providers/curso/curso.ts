import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CursoProvider {

  url_base = 'assets/db/'
  url_cursos = this.url_base + 'cursos.json'
  
  constructor(public http: HttpClient) {
    console.log('Hello CursoProvider Provider');
  }

  getCursos() {
    return this.http.get(this.url_cursos);
  }

}
