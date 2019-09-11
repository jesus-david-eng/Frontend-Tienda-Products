//import { Client } from 'src/app/core/Models/index.model';
import { Injectable } from '@angular/core';
import { ClientsService } from '../services/clients/clients.service';
import { Client } from '../Models/client/entity/Products';



@Injectable({
  providedIn: 'root'
})
export class ClientUseCaseService {

  constructor(private clientService:ClientsService) { }

  public getAllClient(){
    return this.clientService.getClients()}
  
  public addClients(client:Client){
    return this.clientService.addClients(client);
  }  

  public updateClient(client:Client){
    return this.clientService.updateClient(client);
  }
  
  public getClientById(id:string){
    return this.clientService.getClientById(id);
 }
 
}
