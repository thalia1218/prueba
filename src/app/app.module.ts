import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// Rutas
import { APP_ROUTES } from './app.routes';
// import { AppRoutingModule } from './app-routing.module';

// Modulos
import { PagesModule } from './pages/pages.module';

// Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { OlvidoClaveComponent } from './olvido-clave/olvido-clave.component';
import { CambioClaveComponent } from './shared/cambio-clave/cambio-clave.component';

/*import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import {NavbarComponent} from './shared/navbar/navbar.component';
import { HeaderComponent } from './shared/header/header.component';
import { PagesComponent } from './pages/pages.component';
import { SharedComponent } from './shared/shared.component';
*/


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    OlvidoClaveComponent,
    // SharedComponent
    // NavbarComponent,
    // PageNotFoundComponent,
    // HeaderComponent,
    // CambioClaveComponent,

  //  BrowserAnimationsModule --revisar como funciona
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule
    APP_ROUTES,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
