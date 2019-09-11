import { ClientUseCaseService } from '../../core/use-case/client-use-case-service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/core/Models/client/entity/Products';


@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.css']
})
export class CreateClientComponent implements OnInit {
  
  cliente :Client = new Client();
  constructor(private router:Router, private clientUseCase:ClientUseCaseService) {
  
   }

  ngOnInit() {
  console.log(this.Guardar);
  
  }

  Guardar(){
    this.clientUseCase.addClients(this.cliente)
     .subscribe(data =>{ 
       console.log(data);
      this.router.navigate(["clientes"]);
      alert("se guardo el producto")
     })
  }

}
