import { Injectable } from '@angular/core';
import { Articulo } from '../modelos/articulo.modelo';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Global } from '../global/global';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(
    public _Http: HttpClient
  ){ }

  nuevoArticulo(producto:Articulo): Observable<any>{
    let json = JSON.stringify(producto);
    let headers = new HttpHeaders().set('Content-Type','application/json');

    return this._Http.post(Global+'/carga/nuevo', json, {headers: headers});
  }
}
