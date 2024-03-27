import { Injectable } from '@angular/core';
import { Firestore, addDoc, setDoc, updateDoc, deleteDoc, collection, doc, getDocs, getDoc, DocumentReference } from '@angular/fire/firestore';
import { AuthService } from './auth.service';
import { UsersI} from '../models/users-i';
import { Router, RouterConfigurationFeature } from '@angular/router';
import { NgForm } from '@angular/forms';
import { EvenementI} from '../models/evenement-i';
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { getDownloadURL } from '@angular/fire/storage';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
 
  avatarFile: File | null = null;
  onFileSelected(event: any) {
    this.avatarFile = event.target.files[0] as File;
  }
  inscription: { nom: string, prenom: string, statut: string, email: string, avatar: string} = { nom: '', prenom: '', statut: '', email: '', avatar:''};
  
  inscriptionSuccessMessage: string | null = null;
  inscriptionErrorMessage: string | null = null;
  
  constructor(private store: Firestore, private auth: AuthService, private router:Router) { }

  async creerProfil(file: File | null) {
    if (!file) {
      console.error('Aucun fichier sélectionné.');
      return;
    }
    const storage = getStorage();
  const storageRef = ref(storage, `avatars/${this.auth.authID.id}/${file.name}`);

  uploadBytes(storageRef, file)
    .then((snapshot) => {
      console.log('Image téléchargée avec succès:', snapshot);

     const userData = {
      //email: this.inscription.email,
      nom: this.inscription.nom,
      prenom: this.inscription.prenom,
      statut: this.inscription.statut,
      avatar: snapshot.metadata.fullPath,
      email: this.auth.authID.id
      
    };
    // Use addDoc to add a new document to the 'users' collection
  addDoc(collection(this.store, 'users'), userData)
  .then(p => {
    this.router.navigateByUrl('/');
    console.log('Profile created successfully:', p);
  })
  .catch(er => {
    //this.router.navigateByUrl('/inscription');
    console.error('Error creating profile:', er);
  });
  });}
//this.auth.user.uid
  gereDoc(ctlf: NgForm) {

   this.inscription.email=this.auth.authID.id!

   
    const monDoc = doc(this.store, 'users', this.auth.user.uid);
    setDoc(monDoc, this.inscription , { merge: true })
    .then(p =>{
      this.router.navigateByUrl('/');
      console.log(p);
      this.inscriptionSuccessMessage = 'Inscription réussie ! Vous pouvez maintenant créer votre profil.';
      this.inscriptionErrorMessage = null;})
    .catch(er => {
      this.router.navigateByUrl('/incription');
      console.log(er)});
      this.inscriptionSuccessMessage = null;
      this.inscriptionErrorMessage = 'Erreur lors de l\'inscription. Veuillez réessayer.';
  
  }

  supprimeDoc() {
    const monDoc = doc(this.store, 'users', this.auth.user.uid);
    return deleteDoc(monDoc);
  }

  async getUsers(): Promise<UsersI[]> {
    const usersCollection = collection(this.store, 'users');
    const querySnapshot = await getDocs(usersCollection);
    const users: UsersI[] = [];

    querySnapshot.forEach((doc) => {
      const userData = doc.data();
      users.push({
        nom: userData['nom'],
        prenom: userData['prenom'],
        email: userData['email'],
        statut: userData['statut']
      });
    });

    return users;
  }


  async getProfile(userId: string): Promise<UsersI | null> {
    try {
      const userDocRef: DocumentReference = doc(this.store, 'users', userId);
      const userDoc = await getDoc(userDocRef);

      if (userDoc.exists()) {
        const userData = userDoc.data() as UsersI;
        return {
          nom: userData.nom,
          prenom: userData.prenom,
          email: userData.email,
          statut: userData.statut
        };
      } else {
        console.log('User not found');
        return null;
      }
    } catch (error) {
      console.error('Error fetching user profile:', error);
      return null;
    }
  }


  
}

