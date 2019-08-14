import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Articulo } from '../modelos/articulo.modelo';
import { ProductosService } from '../servicios/productos.service';
import { DialogComponent } from './dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import {FormControl, Validators} from '@angular/forms';
import { CategoriasService } from '../servicios/categorias.service';



@Component({
  selector: 'app-carga',
  templateUrl: './carga.component.html',
  styleUrls: ['./carga.component.css'],
  providers:[FormBuilder, ProductosService, CategoriasService]
})
export class CargaComponent implements OnInit {
  public options: FormGroup; 

  public formControl; // variable de la clase FromError

  
  public producto:Articulo;
  public campo_codigo:string;
  public campo_nombre: string;
  public campo_categoria: string;
  public campo_precio: number;
  public campo_stock:number;
  public campo_ancho: number;
  public campo_alto: number;
  public campo_largo: number;

  public listaCategorias; //lista de categorias

  //de estas dos variables sale el codigo del producto
  public cantidadPorCategoria; //cantidad de registros que hay en determinada categoria
  public disminutivo; //disminutivo de las categorias
  

  constructor( fb: FormBuilder, private _Productos:ProductosService, public dialog: MatDialog, public _CategoriasService:CategoriasService ) { 
    this.options = fb.group({floatLabel: 'auto',});
    this.formControl = new FormError;
  }

  ngOnInit() {
    this.listarCategorias();
  }


  agregarProducto(form){
    
    this.producto = new Articulo(
                                  this.campo_codigo,
                                  this.campo_nombre.toUpperCase(),
                                  this.campo_categoria,
                                  this.campo_precio,
                                  this.campo_stock,
                                  this.campo_ancho,
                                  this.campo_alto,
                                  this.campo_largo,
                                );

   //agrega un articulo, peticion por post
    this._Productos.nuevoArticulo(this.producto).subscribe(
      result =>{
        console.log(result);
        this.openDialog(this.producto);
        form.reset();
      },
      err =>{
        console.log(err);
      }
    );
  }
  

  openDialog(guardado){
    const dialogRef = this.dialog.open(DialogComponent, { data:guardado } );

    dialogRef.afterClosed().subscribe(result => {
      //console.log(`Dialog result: ${result}`);
    });
  }
  
  listarCategorias(){
    this._CategoriasService.getCategoria().subscribe(
      result =>{
        //se asignan las categorias que encuentra en listaCategorias
        this.listaCategorias = result;
        //console.log(this.listaCategorias);
      },
      err =>{
        console.log(err);
      });
  }

  contarRegistrosPorCategorias(categoria){

    this._Productos.contarRegistrosPorCategoria(categoria).subscribe(
      result =>{
        this.cantidadPorCategoria = result.toString().toUpperCase();
      },
      err =>{
        console.log(err);
      }
    );
  }

  obtenerDisminutivo(categoria){
    this._CategoriasService.buscarDisminutivo(categoria).subscribe(
      result =>{
        this.disminutivo = result[0].disminutivo.toString();
      },
      err =>{
        console.log(err);
      }
    );
  }


}

class FormError{

  public codigo:FormControl;
  public nombre:FormControl;
  public categoria:FormControl;
  public precio:FormControl;
  public ancho:FormControl;
  public alto:FormControl;
  public largo:FormControl;

  constructor(){
    this.codigo = new FormControl('',Validators.required);
    this.nombre = new FormControl('',Validators.required);
    this.categoria = new FormControl('',Validators.required);
    this.precio = new FormControl('',Validators.required);
    this.ancho = new FormControl('',Validators.required);
    this.alto = new FormControl('',Validators.required);
    this.largo = new FormControl('',Validators.required);
  }

  getErrorMessage(input:string) {
    switch (input){
      case "codigo": {
        return this.codigo.hasError('required') ? 'El campo '+ input +' es requerido!':'ok';
      }
      case "nombre": {
        return this.nombre.hasError('required') ? 'El campo '+ input +' es requerido!':'ok';
      }
      case "categoria": {
        return this.categoria.hasError('required') ? 'El campo '+ input +' es requerido!':'ok';
      }
      case "precio": {
        return this.precio.hasError('required') ? 'El campo '+ input +' es requerido!':'ok';
      }
      case "stock": {
        return this.precio.hasError('required') ? 'El campo '+ input +' es requerido!':'ok';
      }
      case "ancho": {
        return this.ancho.hasError('required') ? 'El campo '+ input +' es requerido!':'ok';
      }
      case "alto": {
        return this.alto.hasError('required') ? 'El campo '+ input +' es requerido!':'ok';
      }
      case "largo": {
        return this.largo.hasError('required') ? 'El campo '+ input +' es requerido!': 'ok';
      }
      default:{ }
    }

  }

}

