import { Injectable } from '@angular/core';
import { EvenementI } from '../models/evenement-i';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EvenementsService {
  // Liste partagée des événements
  listeEvenements:Array<EvenementI> = [];
  listeObservable$:Observable<Array<EvenementI>> = new Observable();
  listeEvents$:BehaviorSubject<Array<EvenementI>> = new BehaviorSubject([] as Array<EvenementI>);
  static date: string | number | Date;

  constructor(private http:HttpClient) {
    this.getEvenements();
  }
  
  /** Recevoir la liste des événements */
  getEvenements(){
    document.addEventListener('onLoad', () => {console.log('Coucou, Bonjour!')})
    this.http.get<Array<EvenementI>>('/assets/data/evenements.json').subscribe(
      {
        next:(ev) => {
          console.log("Données reçues du JSON", ev);
          this.listeEvenements = ev;
          this.listeEvents$.next(ev);
        },
        error:(er) => console.log(er),
        complete:() => console.log('Les événements ont été chargés')
      }
    )
  }
  /**
   * Envoyer un événement au serveur
   * @param ev Evenement à envoyer au serveur
   */
  setEvenement(ev:EvenementI){
    this.http.post('assets/data/evenements.json', ev).subscribe()
  }

  /** Recuperer un evenement de la liste */
getEvenement(id: number): EvenementI {
  return this.listeEvenements.filter(d => d.date == id)[0];
}
}


