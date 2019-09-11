import { Injectable } from '@angular/core';
import { ClientAbstract } from '../../Models/client/gateway/client-gateway.abstract';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Client } from '../../Models/client/entity/Products';
//import { Client } from '../../Models/client/entity/Client';

@Injectable({
  providedIn: 'root'
})
export class ClientsService extends ClientAbstract {
  
  
  
  
   clientsUrl = `${environment.host}:${environment.port}/api/product`; // back tick + interpolacion

  constructor(private http: HttpClient) {
    super();
  }
  
  getClientById(id: string): Observable<Client> {
    return this.http.get<Client>(this.clientsUrl+"/search/"+id)
  }

  updateClient(client:Client): Observable<Client> {
    return this.http.put<Client>(this.clientsUrl+"/update/"+client.id,client);
  }
  

  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.clientsUrl);
  }

  addClients(client: Client): Observable<Client> {
    return this.http.post<Client>(`${this.clientsUrl}/create`, client)
  }

}
