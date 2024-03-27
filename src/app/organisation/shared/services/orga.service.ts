import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Firestore, collection, addDoc, doc, setDoc } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { HttpClient } from '@angular/common/http';
import { StocksI } from 'src/app/shared/models/stocks-i';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OrgaService {
  form: {
    titre: string;
    places: number;
    date: number | Date;
    debut: string;
    fin: string;
  } = {
    titre: '',
    places: 0,
    date: new Date(),
    debut: '',
    fin: ''
  };
  router: any;

  constructor(private http:HttpClient,private auth: AuthService,private store: Firestore, router:Router) { this.getStocks();}

  
  

  ajouterEvenement() {
    

    const eventData = {
      titre: this.form.titre,
      places: this.form.places,
      date: this.form.date,
      debut: this.form.debut,
      fin: this.form.fin
      // Ajouter d'autres champs si nécessaire
    };

    addDoc(collection(this.store, 'events'), eventData)
      .then((response: any) => {
        console.log('Événement ajouté avec succès :', response);
        // Réinitialisez le formulaire si nécessaire
      })
      .catch((error: any) => {
        console.error('Erreur lors de l\'ajout de l\'événement :', error);
      });
  }

  gereDoc(form: NgForm) {

    
     const monDoc = doc(this.store, 'users', this.auth.user.uid);
     setDoc(monDoc, this.form , { merge: true })
     .then(p =>{
      this.router.navigateByUrl('/');
       console.log(p);
       
       this.router.navigateByUrl('/incription');
       console.log(Error)});
       
   }

  listeLesStocks:Array<StocksI> = [];
  listeObservable$:Observable<Array<StocksI>> = new Observable();
  listeStocks$:BehaviorSubject<Array<StocksI>> = new BehaviorSubject([] as Array<StocksI>);
  static date: string | number | Date;

  /** Recevoir la liste des événements */
  getStocks(){
    document.addEventListener('onLoad', () => {console.log('Coucou, Bonjour!')})
    this.http.get<Array<StocksI>>('/assets/data/stocks.json').subscribe(
      {
        next:(ev) => {
          console.log("Données reçues du JSON", ev);
          this.listeLesStocks = ev;
          this.listeStocks$.next(ev);
        },
        error:(er) => console.log(er),
        complete:() => console.log('Les stocks ont été chargés')
      }
    )
  }
  /**
   * Envoyer un événement au serveur
   * @param ev Evenement à envoyer au serveur
   */
  setStocks(ev:StocksI){
    this.http.post('assets/data/stocks.json', ev).subscribe()
  }

  /** Recuperer un evenement de la liste */
getStock(id: number): StocksI {
  return this.listeLesStocks.filter(b => b.platResistance == id)[0];
}
}






