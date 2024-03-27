import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EvenementI } from 'src/app/shared/models/evenement-i';
import { EvenementsService } from 'src/app/shared/services/evenements.service';

@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.css']
})
export class EvenementComponent {
  eventId: any = '';
  evenement: EvenementI= {titre: 'Veuillez sélectionner un évènement' , date:0, infos:"", places:0, horaires:{debut:"", fin:"", },image:""}
  @Input ('selectedE') selectedEvenement! : EvenementI;
  @Output() closeEvent = new EventEmitter<null>();

id: any;
  constructor(
    private route: ActivatedRoute,
    public events: EvenementsService
  ) {}

  ngOnInit(): void {

    this.eventId = this.route.snapshot.paramMap.get('barbapapa') || -1;

      console.log('Evenement:', this.events.getEvenement(this.eventId));
      this.evenement = this.events.getEvenement(this.eventId);
      console.log('Evenement:', this.evenement);
  }
  fermer(){
    this.closeEvent.emit(null);
  }

}
