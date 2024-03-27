import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './template/footer/footer.component';
import { MenuComponent } from './template/menu/menu.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { UsersComponent } from './pages/users/users.component';
import { ProfilComponent } from './pages/profil/profil.component';
import { EvenementsComponent } from './pages/evenements/evenements.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { LegalsComponent } from './pages/legals/legals.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ErreurComponent } from './pages/erreur/erreur.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { EvenementComponent } from './pages/evenement/evenement.component';
import { EventsPipe } from './shared/pipes/events.pipe';
import { TokenInterceptor } from './shared/security/token.interceptor';
import { Auth401Interceptor } from './shared/security/auth401.interceptor';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { RgpdComponent} from './pages/rgpd/rgpd.component';
import { from } from 'rxjs';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MenuComponent,
    AccueilComponent,
    UsersComponent,
    ProfilComponent,
    EvenementsComponent,
    InscriptionComponent,
    ConnexionComponent,
    LegalsComponent,
    ContactComponent,
    ErreurComponent,
    EvenementComponent,
    EventsPipe,
    RgpdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
     provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase()),
    provideStorage(() => getStorage()),
    provideAuth(() => getAuth()),
    provideFirebaseApp(() => initializeApp({"projectId":"cy2023-feast-b5034","appId":"1:439087408046:web:3e7d9269b8442a4b779e3f","storageBucket":"cy2023-feast-b5034.appspot.com","apiKey":"AIzaSyAPH7nnZNgqteejuDgCy3GJ1IDYD4f769w","authDomain":"cy2023-feast-b5034.firebaseapp.com","messagingSenderId":"439087408046"})),
    
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:TokenInterceptor, multi:true},
              {provide:HTTP_INTERCEPTORS,useClass:Auth401Interceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
