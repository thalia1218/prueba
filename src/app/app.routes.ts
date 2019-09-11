// Rutas
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { OlvidoClaveComponent } from './olvido-clave/olvido-clave.component';
import { CambioClaveComponent } from './shared/cambio-clave/cambio-clave.component';


const appRoutes: Routes = [
  /*{
    path: '',
    component: PagesComponent,
    children: [
      // Rutas Hijas (secundarias)
      {path: 'home', component: DatosPersonalesComponent},
      {path: 'kioDatoPersonal', component: DatosPersonalesComponent}, // ver datos personales
      {path: 'kio_crearsolicitud', component: KioCrearsolicitudComponent}, // crear solicivacas
      {path: 'kio_versolicitudesempleado', component: KioVersolicitudesempleadoComponent}, // Ver solicitudes propias
      {path: 'kio_versolicisinprocesar', component: KioVersolicisinprocesarComponent}, // Solicitudes para procesar (empleadojefe)
      {path: 'kio_versoliciprocesadas', component: KioVersoliciprocesadasComponent}, // histórico Solicitudes ya procesadas (empleadojefe)
      {path: 'kio_versolicisinprocpersona', component: KioVersolicisinprocpersonaComponent}, // Solicitudes para procesar (kioautorizador)
      {path: 'kio_versoliciprocpersona', component: KioVersoliciprocpersonaComponent}, // Solicitudes ya procesadas (kioautorizador)
      {path: 'cambioClaveL', component: CambioClaveComponent},
      {path: '', redirectTo: '/home', pathMatch: 'full'}
    ]
  },*/
  // Rutas principales
  {path: 'login', component: LoginComponent},
  {path: 'olvidoClave', component: OlvidoClaveComponent},
  {path: 'cambioClave', component: CambioClaveComponent},
  {path: '**', component: PageNotFoundComponent}
];

export const  APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash: true});
