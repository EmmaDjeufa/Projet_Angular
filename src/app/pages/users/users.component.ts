import { Component, OnInit } from '@angular/core';
import { UsersI } from 'src/app/shared/models/users-i';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  // Liste d'utilisateurs
  listeUsers: UsersI[] = [];
  filtre: string = '';

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    // Chargez la liste des utilisateurs au moment de l'initialisation du composant
    this.loadUsers();
  }

  // Fonction de filtre
  filtrerUtilisateurs() {
    if (!this.filtre) {
      // Si le filtre est vide, afficher tous les utilisateurs
      return this.listeUsers;
    }

    // Utiliser la méthode filter pour filtrer les utilisateurs par nom, prénom ou email
    return this.listeUsers.filter(user =>
      user.nom.toLowerCase().includes(this.filtre.toLowerCase()) ||
      user.prenom.toLowerCase().includes(this.filtre.toLowerCase()) ||
      user.email.toLowerCase().includes(this.filtre.toLowerCase())
    );
  }

  // Fonction pour charger la liste des utilisateurs depuis Firebase
  loadUsers() {
    this.usersService.getUsers()
      .then(users => {
        this.listeUsers = users;
      })
      .catch(error => {
        console.error('Erreur lors du chargement des utilisateurs : ', error);
      });
  }
}


