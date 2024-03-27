import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Subscribable, Subscription } from 'rxjs';
import { EvenementI } from 'src/app/shared/models/evenement-i';
import { EvenementsService } from 'src/app/shared/services/evenements.service';

@Component({
  selector: 'app-evenements',
  templateUrl: './evenements.component.html',
  styleUrls: ['./evenements.component.css']
})
export class EvenementsComponent {
  id! : number;
  filtre: string = '';
  listener:Subscription ;
  eventId: any="";
  selectedEvent! : EvenementI | null;
  depart: number=0;
  pass: number=5;

  choix:boolean = false;

  //angular output
  constructor(public events:EvenementsService){

    this.listener = this.events.listeEvents$.subscribe(
      {
      next:evs => console.log("From Observable subscription"),
      error: er => console.log("Error: " + er),
      complete:() => console.log("Data sunchronezed:")
      }
    )
  }
  ngOnDestroy() : void{
    this.listener.unsubscribe();
  }

  
  initEvent(){
    this.selectedEvent = null
  }
  avant(){
    if(this.depart + this.pass > this.events.listeEvenements.length){
      this.depart = this.depart + this.pass - this.events.listeEvenements.length;
    }
    this.depart += 4
  }
  arriere(){
    if(this.depart - this.pass < 0){
      this.depart = this.events.listeEvenements.length + this.depart - this.pass;
    }
    else{
      this.depart -= 4
    }
  }
}