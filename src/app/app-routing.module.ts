import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DatosPersonalesComponent } from './pages/datos-personales/datos-personales.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { PagesComponent } from './pages/pages.component';


const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      // aqui rutas secundarias
      {path: 'dashboard', component: DatosPersonalesComponent},
      {path: 'datosPersonales', component: DatosPersonalesComponent},
      {path: 'datosPersonales', component: DatosPersonalesComponent},
      {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
    ]
  },
      // aqui rutas principales
  {path: 'login', component: LoginComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
