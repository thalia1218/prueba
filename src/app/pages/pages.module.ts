import { NgModule } from '@angular/core';
import { PAGES_ROUTES } from './pages.routes';

import { SharedModule } from '../shared/shared.module';

import { PagesComponent } from './pages.component';

import { DatosPersonalesComponent } from './datos-personales/datos-personales.component';
import { KioCrearsolicitudComponent } from './kio-crearsolicitud/kio-crearsolicitud.component';
import { KioVersoliciprocesadasComponent } from './kio-versoliciprocesadas/kio-versoliciprocesadas.component';
import { KioVersoliciprocpersonaComponent } from './kio-versoliciprocpersona/kio-versoliciprocpersona.component';
import { KioVersolicitudesempleadoComponent } from './kio-versolicitudesempleado/kio-versolicitudesempleado.component';
import { KioVersolicisinprocesarComponent } from './kio-versolicisinprocesar/kio-versolicisinprocesar.component';
import { KioVersolicisinprocpersonaComponent } from './kio-versolicisinprocpersona/kio-versolicisinprocpersona.component';




@NgModule({
  declarations: [
    PagesComponent,
    DatosPersonalesComponent,
    KioCrearsolicitudComponent,
    KioVersoliciprocesadasComponent,
    KioVersoliciprocpersonaComponent,
    KioVersolicisinprocesarComponent,
    KioVersolicisinprocpersonaComponent,
    KioVersolicitudesempleadoComponent
  ],
  exports: [
    DatosPersonalesComponent,
    KioCrearsolicitudComponent,
    KioVersoliciprocesadasComponent,
    KioVersoliciprocpersonaComponent,
    KioVersolicisinprocesarComponent,
    KioVersolicisinprocpersonaComponent,
    KioVersolicitudesempleadoComponent
  ],
  imports: [
    SharedModule,
    PAGES_ROUTES
  ]
})

export class PagesModule {

}
