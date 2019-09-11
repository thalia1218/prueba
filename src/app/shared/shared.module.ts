import { NgModule } from "@angular/core";
import { CambioClaveComponent } from './cambio-clave/cambio-clave.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    CambioClaveComponent,
    HeaderComponent,
    NavbarComponent,
    PageNotFoundComponent
  ],
  exports: [
    CambioClaveComponent,
    HeaderComponent,
    NavbarComponent,
    PageNotFoundComponent
  ]
})

export class SharedModule {

}
