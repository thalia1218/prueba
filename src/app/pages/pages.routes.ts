import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DatosPersonalesComponent } from './datos-personales/datos-personales.component';
import { KioCrearsolicitudComponent } from './kio-crearsolicitud/kio-crearsolicitud.component';
import { KioVersolicitudesempleadoComponent } from './kio-versolicitudesempleado/kio-versolicitudesempleado.component';
import { KioVersolicisinprocesarComponent } from './kio-versolicisinprocesar/kio-versolicisinprocesar.component';
import { KioVersoliciprocesadasComponent } from './kio-versoliciprocesadas/kio-versoliciprocesadas.component';
import { KioVersolicisinprocpersonaComponent } from './kio-versolicisinprocpersona/kio-versolicisinprocpersona.component';
import { KioVersoliciprocpersonaComponent } from './kio-versoliciprocpersona/kio-versoliciprocpersona.component';
import { CambioClaveComponent } from '../shared/cambio-clave/cambio-clave.component';

const pagesRoutes: Routes = [
  {
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
  }
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
