import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { UsersI } from '../models/users-i';
import { Router } from '@angular/router';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, User} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

 
  getCurrentUserUid() : string | null{
    return this.user?.uid || null;

    //throw new Error('Method not implemented.');
  }
  getProfileFromFirebase() {
    throw new Error('Method not implemented.');
  }

  authID:{id:string, mdp:string} = {id:'', mdp:''};
  profil!:UsersI;
  isLoggedIn: boolean = false;
  user!: User;

  //user : FireUserI;
 

    /** Intégration de l'athentification avec firebase */
  private fire= inject(Auth)

  constructor(private http:HttpClient, private router:Router) {}

  authentification(){
    this.http.get<UsersI>(`assets/data/ids/${this.authID.id}@${this.authID.mdp}.json`).subscribe(
      {
        next:p => {
          this.profil = p;
          this.isLoggedIn = true;
          this.router.navigateByUrl('/');
        },
        error:er => {
          console.log(er);
          this.router.navigateByUrl('toto');
        },
        complete:() => console.log('Profil chargé et utilisateur authentifié')
      }
    )
    // Doit appeler le fichier heidi@heidi64.json sachant que heidi est l'id saisi et heidi64 le mot de passe
    // Ca donnera une concatenation sur la requête http comme celle-ci : `assets/data/ids/${this.authID.id}@${this.authID.mdp}.json`
  }
  /**Méthode pour s'authentifier  en utilisant firebase*/
  fireAuth(){
    signInWithEmailAndPassword(this.fire, this.authID.id, this.authID.mdp)
    .then((infos) => {
      this.user = infos.user
      //this.profil.dateCreation = parseInt(infos.user.metadata.creationTime!)
      //this.profil.lastlogin= parseInt(infos.user.metadata.lastSignInTime!)
      //this.profil.email = infos.user.email!
      //this.profil.token = infos.user.refreshToken!
      this.authID.id = infos.user.uid;
      this.isLoggedIn = true;
      //this.profil = p;
      //this.isLoggedIn = true;
      this.router.navigateByUrl('/');

      console.log(this.user)
    })
    .catch((er )=>{
      console.log(er); 
      this.isLoggedIn = false;
      if (er.code === 'auth/user-not-found') {
        console.log('Utilisateur non trouvé. Vérifiez vos identifiants.');
      } else if (er.code === 'auth/wrong-password') {
        console.log('Mot de passe incorrect. Vérifiez vos identifiants.');
      } else {
        console.log('Erreur inattendue lors de l\'authentification.');
      }

    })


    
    
   
  }

  fireInscription(){
    createUserWithEmailAndPassword(this.fire, this.authID.id, this.authID.mdp)
      //this.profil.token = infos.user.refreshToken.
      .then(i =>{
        this.user = i.user
        this.isLoggedIn = true;
        
      })
      .catch((er )=>{
        console.log(er); 
        this.isLoggedIn = false;
        
      })
      
  }

    


}
