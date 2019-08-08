import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Articulo } from '../modelos/articulo.modelo';
import { ProductosService } from '../servicios/productos.service';
import { DialogComponent } from './dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import {FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-carga',
  templateUrl: './carga.component.html',
  styleUrls: ['./carga.component.css'],
  providers:[FormBuilder, ProductosService]
})
export class CargaComponent implements OnInit {
  public options: FormGroup; 

  public formControl; // variable de la clase FromError

  public producto:Articulo;
  public campo_nombre: string;
  public campo_categoria: string;
  public campo_precio: number;
  public campo_ancho: number;
  public campo_alto: number;
  public campo_largo: number;

  constructor( fb: FormBuilder, private _productos:ProductosService, public dialog: MatDialog ) { 
    this.options = fb.group({floatLabel: 'auto',});
    this.formControl = new FormError;
  }

  ngOnInit() {
   
  }


  agregarProducto(){
    this.producto = new Articulo(
                                  "abc123",
                                  this.campo_nombre,
                                  this.campo_categoria,
                                  this.campo_precio,
                                  this.campo_ancho,
                                  this.campo_alto,
                                  this.campo_largo,
                                  10
                                );

   //agrega un articulo, peticion por post
    this._productos.nuevoArticulo(this.producto).subscribe(
      result =>{
        console.log(result);
        this.openDialog(this.producto);
        
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




}



class FormError{

  public nombre:FormControl;
  public categoria:FormControl;
  public precio:FormControl;
  public ancho:FormControl;
  public alto:FormControl;
  public largo:FormControl;

  constructor(){

    this.nombre = new FormControl('',Validators.required);
    this.categoria = new FormControl('',Validators.required);
    this.precio = new FormControl('',Validators.required);
    this.ancho = new FormControl('',Validators.required);
    this.alto = new FormControl('',Validators.required);
    this.largo = new FormControl('',Validators.required);
  }

  getErrorMessage(input:string) {
    switch (input){
      case "nombre": {
        return this.nombre.hasError('required') ? 'El campo '+ input +' es requerido!':'ok';
      }
      case "categoria": {
        return this.categoria.hasError('required') ? 'El campo '+ input +' es requerido!':'ok';
      }
      case "precio": {
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

