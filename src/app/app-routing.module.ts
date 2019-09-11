import { LoginComponent } from './acceso/login/login.component';
import { UpdateComponent } from './pages/update/update.component';
import { CreateClientComponent } from './pages/create-products/create-client.component';
import { ContainerComponent } from './pages/container/container.component';
import { ClientDetallesComponent } from './pages/Product-detalles/client-detalles.component';
import { AppComponent } from './app.component';

import { ClientListCardsComponent } from './pages/client-list-cards/client-list-cards.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
   
  {
  path: "menu",
  component: ContainerComponent ,
  },
  {
      path: "Productos",
      component: ClientListCardsComponent
  },
    
  {
    path: "addProduct",
    component: CreateClientComponent
  },
{
  path: "update",
  component: UpdateComponent
},

{
  path: "login",
  component: LoginComponent
}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
