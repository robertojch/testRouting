import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';
import { BotonPanicoComponent } from './boton-panico/boton-panico.component';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ClientsComponent } from './clients/clients.component';

@NgModule({
  declarations: [
    AppComponent,
    Test1Component,
    Test2Component,
    BotonPanicoComponent,
    ProductsComponent,
    UsersComponent,
    ErrorPageComponent,
    ClientsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
