import { Injectable } from '@angular/core';
import { Categoria } from '../modelos/categoria.modelo';
import  { Global } from '../global/global';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  public urlSet:string;
  public urlGet:string;

  constructor( public _Http:HttpClient ) {
    this.urlSet = "/carga/nuevacategoria"
    this.urlGet = "/carga/listarcategorias";
   }

   setCategoria(categoria:Categoria): Observable <any>{
      let json = JSON.stringify(categoria);
      let headers = new HttpHeaders().set('content-type', 'application/json');
      return this._Http.post(Global + this.urlSet, json, {headers:headers});
   }

   getCategoria():Observable <any>{
    return this._Http.get(Global+this.urlGet);
   }
}
