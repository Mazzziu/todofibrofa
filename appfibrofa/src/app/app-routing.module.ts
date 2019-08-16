import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//mis componentes
import { NuevoArticuloComponent } from './cargar/nuevo-articulo/nuevo-articulo.component';
import { HomeComponent } from './home/home.component';
import { NuevaCategoriaComponent } from './nueva-categoria/nueva-categoria.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'nuevo-articulo', component: NuevoArticuloComponent},
  {path: 'nuevacategoria', component: NuevaCategoriaComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
