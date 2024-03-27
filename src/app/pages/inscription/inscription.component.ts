import { Component, inject } from '@angular/core';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { timer } from 'rxjs';
import { inscriptionI } from 'src/app/shared/models/users-i';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UsersService } from 'src/app/shared/services/users.service';
@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {
  inscriptionSuccessMessage: string | null = null;
  inscriptionErrorMessage: string | null = null;
  usersService: any;
  //inscriptionSuccess: boolean;
  
  constructor(public auth: AuthService, public users: UsersService, private router: Router ){
    
  }

selectedFile: File | null = null;

onFileSelected(event: any) {
  this.selectedFile = event.target.files[0] as File;
}

 
  
}


