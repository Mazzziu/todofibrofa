import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Articulo, ArticuloDialogData } from '../../modelos/articulo.modelo';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  public articulo: Articulo;

  constructor(@Inject(MAT_DIALOG_DATA) public data:ArticuloDialogData) { 

    this.articulo = this.data;

  }

  ngOnInit() {
    console.log(this.articulo);
  }

}
