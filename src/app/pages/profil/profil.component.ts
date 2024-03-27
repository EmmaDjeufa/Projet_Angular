import { Component, OnInit } from '@angular/core';
import { UsersI } from 'src/app/shared/models/users-i';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Firestore } from '@angular/fire/firestore';
import { getAuth } from "firebase/auth";
import { UsersService } from 'src/app/shared/services/users.service';



@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  //const auth = getAuth();
  //const user = auth.currentUser;
  profil: UsersI;
  //image: string = 'assets/image/accueil.jpg'
  //firestore: any;
  constructor(private auth: AuthService, private firestore: Firestore, private userService: UsersService){
    this.profil = auth.profil;
      
  }
  ngOnInit(): void {
    const userId = this.auth.getCurrentUserUid();

    if (userId) {
      this.userService.getProfile(userId)
        .then((profile) => {
          if (profile) {
            this.profil = profile;
          } else {
            console.error(`User not found for ID: ${userId}`);
          }
        })
        .catch(error => {
          console.error('Error fetching user profile:', error);
        });
    } else {
      console.error('User ID is not available');
    }
  }
  
}



