import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Articulo } from '../modelos/articulo.modelo'
import { ProductosService } from '../servicios/productos.service'

@Component({
  selector: 'app-carga',
  templateUrl: './carga.component.html',
  styleUrls: ['./carga.component.css'],
  providers:[FormBuilder, ProductosService]
})
export class CargaComponent implements OnInit {
  options: FormGroup;

  public producto:Articulo;

  public campo_nombre: string;
  public campo_categoria: string;
  public campo_precio: number;
  public campo_ancho: number;
  public campo_alto: number;
  public campo_largo: number;

  constructor( fb: FormBuilder, private _productos:ProductosService ) { 
    this.options = fb.group({floatLabel: 'auto',});
  }

  ngOnInit() {

  }

  agregarProducto(){
    this.producto = new Articulo(
                                  "id",
                                  this.campo_nombre,
                                  this.campo_categoria,
                                  this.campo_precio,
                                  this.campo_ancho,
                                  this.campo_alto,
                                  this.campo_largo,
                                  10);

    console.log(this.producto);
    //this._productos.
  }

}
