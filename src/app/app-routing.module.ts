import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AcceuilComponent} from "./acceuil/acceuil.component";
import {CarteComponent} from "./carte/carte.component";

const routes: Routes = [
  { path: '', component: AcceuilComponent }, // Page d'accueil
  { path: 'carte', component: CarteComponent}, //Page carte
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
