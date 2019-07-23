import { Injectable } from '@angular/core';
import { Articulo } from '../modelos/articulo.modelo'

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  public articulo:Articulo

  constructor() { 

  }

  setArticulo(producto:Articulo){
    console.log("Articulo: " + producto.nombre + "cargado a DB")
  }
}
