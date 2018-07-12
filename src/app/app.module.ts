import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpModule} from "@angular/http";

//RUTAS
import {app_routing} from "./app.routes";


//SERVICIOS
import {InformacionService} from  "./services/informacion.service";
import {UsuariosService} from "./services/usuarios.service";


//COMPONENTES
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/Login/Login.component';
import { CarritoComponent } from './components/carrito/carrito.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortafolioComponent,
    AboutComponent,
    LoginComponent,
    CarritoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    app_routing
  ],
  providers: [
    InformacionService,
    UsuariosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
