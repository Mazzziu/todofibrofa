import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//mis componentes
import { CargaComponent } from './carga/carga.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'carga', component:CargaComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
