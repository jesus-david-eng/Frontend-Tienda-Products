import { Products } from './../../../../../server/db-data';
import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { ClientsService } from './clients.service';

fdescribe('ClientsService', () => {

  let service: ClientsService,
  httpTestingController: HttpTestingController;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
  ],
  providers: [
      ClientsService
  ]
  }));

  service = TestBed.get(ClientsService),
  httpTestingController = TestBed.get(HttpTestingController);

  it('should be created', () => {
    const service: ClientsService = TestBed.get(ClientsService);
    expect(service).toBeTruthy();
  });

  fit('obtener todos los products', () => {

    service.getClients()
        .subscribe(data => {

            expect(data).toBeTruthy('Nooo products returned');
            expect(data.length).toBe(3,"incorrect number of products");
            console.log(data.length);    

        });

    const req = httpTestingController.expectOne('http://localhost:8080/api/product');
    expect(req.request.method).toEqual("GET");
    req.flush(Products);
    
});

it('encontrar cliente por id', () => {

  service.getClientById("24")
      .subscribe(clientes => {

          expect(clientes).toBeTruthy();
          expect(clientes.name).toEqual("samsumg");
          expect(clientes.id).toBe("24");
          
      });

  const req = httpTestingController.expectOne('http://localhost:8080/api/product/24');
  expect(req.request.method).toEqual("GET");
  req.flush(Products[1]);    

});


});
