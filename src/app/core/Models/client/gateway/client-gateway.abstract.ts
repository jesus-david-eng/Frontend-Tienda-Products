import { Observable } from 'rxjs';
import { Client } from '../../index.model';
import { businessName } from '../businessNameList/businessName';


export abstract class ClientAbstract {
    abstract getClients(): Observable<Client[]>;
    abstract addClients(client: Client): Observable<Client> ;
    abstract updateClient( client: Client): Observable<Client> ;
    abstract getClientById(id: string): Observable<Client>;

}