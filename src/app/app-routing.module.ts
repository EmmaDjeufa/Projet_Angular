import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { ProfilComponent } from './pages/profil/profil.component';
import { UsersComponent } from './pages/users/users.component';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { EvenementsComponent } from './pages/evenements/evenements.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { LegalsComponent } from './pages/legals/legals.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ErreurComponent } from './pages/erreur/erreur.component';
import { EvenementComponent } from './pages/evenement/evenement.component';
import { authGuard } from './shared/security/auth.guard';
import { RgpdComponent } from './pages/rgpd/rgpd.component';


const routes: Routes = [
  {path:'', component:AccueilComponent, canActivate: [authGuard] },
  {path:'profil', component:ProfilComponent},
  {path:'utilisateurs', component:UsersComponent},
  {path:'evenements', component:EvenementsComponent},
  {path:'evenement/:barbapapa', component:EvenementComponent},
  {path:'inscription', component:InscriptionComponent},
  {path:'connexion', component:ConnexionComponent},
  {path:'mentions', component:LegalsComponent},
  {path:'rgpd', component:RgpdComponent},
  {path:'legals', component:LegalsComponent},
  {path:'contact', component:ContactComponent},
  {path:'organisation', loadChildren:
    () => import('./organisation/organisation.module').then(m => m.OrganisationModule),
    canActivate:[authGuard]
  },
  {path:'admin', loadChildren:
  () => import('./admin/admin.module').then(m => m.AdminModule),
  canActivate:[authGuard]
},
  {path:'**', component:ErreurComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
