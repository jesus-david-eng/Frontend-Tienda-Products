import { ClientUseCaseService } from './../../core/use-case/client-use-case-service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/core/Models/index.model';

@Component({
  selector: 'app-client-list-cards',
  templateUrl: './client-list-cards.component.html',
  styleUrls: ['./client-list-cards.component.css']
})
export class ClientListCardsComponent implements OnInit {
  
  
  clients: Client[] = [];
  constructor(private route:Router, private clientsUsercaseService:ClientUseCaseService) { }

  ngOnInit() {
   this.getAllclient();
  }

  getAllclient(){
    this.clientsUsercaseService.getAllClient().subscribe(data =>{
      this.clients = data;
      console.log(this.clients);
    })
  }

  editar(id:string):void{
    localStorage.setItem("id",id);
    this.route.navigate(["update"]);
  }

  cambiar():void{
    this.route.navigate(["crear"]);
  }

}
