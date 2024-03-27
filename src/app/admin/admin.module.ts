import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { GestionProfilsComponent } from './pages/gestion-profils/gestion-profils.component';
import { ParametresComponent } from './pages/parametres/parametres.component';
import { AdminMenuComponent } from './template/admin-menu/admin-menu.component';


@NgModule({
  declarations: [
    AdminComponent,
    GestionProfilsComponent,
    ParametresComponent,
    AdminMenuComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
