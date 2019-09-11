
import { ClientsService } from './core/services/clients/clients.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientListCardsComponent } from './pages/client-list-cards/client-list-cards.component';
import { UpdateComponent } from './pages/update/update.component';
import { HttpClientModule } from '@angular/common/http';
import { ClientDetallesComponent } from './pages/Product-detalles/client-detalles.component';
import { ContainerComponent } from './pages/container/container.component';
import { CreateClientComponent } from './pages/create-products/create-client.component';
import {FormsModule} from '@angular/forms';
import { LoginComponent } from './acceso/login/login.component';




@NgModule({
  declarations: [
    AppComponent,
    ClientListCardsComponent,
    UpdateComponent,
    ClientDetallesComponent,
    ContainerComponent,
    CreateClientComponent,
    LoginComponent,

  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ClientsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
