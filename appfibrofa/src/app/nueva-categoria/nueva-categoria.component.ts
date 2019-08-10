import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Categoria } from '../modelos/categoria.modelo';
import { CategoriasService } from '../servicios/categorias.service';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-nueva-categoria',
  templateUrl: './nueva-categoria.component.html',
  styleUrls: ['./nueva-categoria.component.css'],
  providers: [ FormBuilder, CategoriasService ]
})
export class NuevaCategoriaComponent implements OnInit {

  public options: FormGroup; 

  public controlNombre: FormControl;

  public categoria:Categoria; //variable para crear nueva categoria
  public campo_categoria;
  public campo_disminutivo;
  public listaCategorias; //variable para listar las categorias

  constructor(fb: FormBuilder, private _CategoriasService:CategoriasService) { 
    this.options = fb.group({floatLabel: 'auto',});
    this.controlNombre = new FormControl ('',Validators.required);
  }

  ngOnInit() {
    //al inicio se ejecuta la funcion de listar las categorias
    this.listarCategorias();
  }

  getErrorMessage() {

    return this.controlNombre.hasError('required') ? 'Completa este campo':'ok';
  }

  cargarCategoria(){
    this.categoria = new Categoria(this.campo_categoria,this.campo_disminutivo);
    console.log(this.categoria);
    this._CategoriasService.setCategoria(this.categoria).subscribe(
      result =>{
        console.log(result);
        this.listarCategorias() //una vez guardada la categoria vuelve a listar
      },
      err =>{
        console.log(err);
      }
    );
  }

  listarCategorias(){
    this._CategoriasService.getCategoria().subscribe(
      result =>{
        //se asignan las categorias que encuentra en listaCategorias
        this.listaCategorias = result;
      },
      err =>{
        console.log(err);
      }
    )
  }
}
