import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


//meterial
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DemoMaterialModule } from './material-module';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatNativeDateModule } from '@angular/material/core';

//mis componentes
import { HomeComponent } from './home/home.component'
import { CargaComponent } from './carga/carga.component';
import { DialogComponent } from './carga/dialog/dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    CargaComponent,
    HomeComponent,
    DialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatButtonModule,
    DemoMaterialModule,
    MatDialogModule,
    MatNativeDateModule
  ],
  entryComponents: [DialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);