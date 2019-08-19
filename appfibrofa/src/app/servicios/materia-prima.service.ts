import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Global } from '../global/global';
import { materiaPrima } from '../modelos/materia-prima.modelo';

@Injectable({
  providedIn: 'root'
})
export class MateriaPrimaService {

  constructor(public _Http:HttpClient) { }

  newMateriaPrima(materiaPrima:materiaPrima):Observable<any>{
    let json = JSON.stringify(materiaPrima);
    let headers = new HttpHeaders().set('Content-Type','application/json');

    return this._Http.post(Global+'/carga/nuevaMateriaPrima', json, {headers: headers});
  }

  getMateriaPrima(value:materiaPrima):Observable<any>{
    return this._Http.get(Global+"/carga/consultarMateriaPrima/"+value);
  }

  listarMateriaPrima():Observable<any>{
    return this._Http.get(Global+'/carga/listarMateriaPrima');
  }


}
