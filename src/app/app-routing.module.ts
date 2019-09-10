import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';
import { BotonPanicoComponent } from './boton-panico/boton-panico.component';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ClientsComponent } from './clients/clients.component';


const routes: Routes = [
  { path:'panico', component: BotonPanicoComponent, outlet: 'popup'},
  { path: '', redirectTo:'/test1', pathMatch:'full'},// hay 2 tipos de pathMatch prefix y full
  { path: 'test1', component:Test1Component},
  { path: 'test2', component:Test2Component},
  { path: 'test11', component:Test1Component, pathMatch:'full'},
  { path: 'test22', component:Test1Component},
  { path: 'products', component:ProductsComponent},
  { path: 'users', component:UsersComponent},
  { path: 'client/:id', component:ClientsComponent},
  { path: 'error', component:ErrorPageComponent},
  /*
    linea 16 fue comentada para testear el tema del pathMath.
    Si la url es invalida entonces el router direccionara a test1 o alguna pagina de error
   */
  { path: '**', redirectTo:'error'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
