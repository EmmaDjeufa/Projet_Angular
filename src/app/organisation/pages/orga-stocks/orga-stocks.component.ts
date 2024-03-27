import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { StocksI } from 'src/app/shared/models/stocks-i';
import { OrgaService } from '../../shared/services/orga.service';

@Component({
  selector: 'app-orga-stocks',
  templateUrl: './orga-stocks.component.html',
  styleUrls: ['./orga-stocks.component.css']
})
export class OrgaStocksComponent {

id! : number;
filtre: string = '';
listener:Subscription ;
eventId: any="";
depart: number=0;
pass: number=5;

choix:boolean = false;
selectedStocks!: StocksI|null;

  //angular output
  constructor(public stocks:OrgaService){

    this.listener = this.stocks.listeStocks$.subscribe(
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

  
  initStocks(){
    this.selectedStocks = null
  }
}
