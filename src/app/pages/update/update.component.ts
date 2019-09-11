import { ClientUseCaseService } from './../../core/use-case/client-use-case-service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/core/Models/client/entity/Products';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  
  cliente :Client = new Client();
  constructor(private service:ClientUseCaseService, private router:Router) { }
1
  ngOnInit() {
    this.getClientByid();
  }


  getClientByid(){
    let id =localStorage.getItem("id");
    this.service.getClientById(id)
    .subscribe(data=>{
      this.cliente=data;

    })
  }

  actualizar(cliente: Client){
    this.service.updateClient(cliente)
      .subscribe(response =>{
         this.router.navigate(["clientes"]);
         this.cliente=response;        
      }
      )
}

}
