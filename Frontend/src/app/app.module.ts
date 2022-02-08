import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { InicioComponent } from './components/inicio/inicio.component';

import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { CookieService } from 'ngx-cookie-service';
import { RiuBuenavistaComponent } from './components/riu-buenavista/riu-buenavista.component';
import { RiuArecasComponent } from './components/riu-arecas/riu-arecas.component';
import { PerfilUsuarioComponent } from './components/perfil-usuario/perfil-usuario.component';
import { RiuPalaceComponent } from './components/riu-palace/riu-palace.component';
import { RiuGaroeComponent } from './components/riu-garoe/riu-garoe.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    InicioComponent,
    RiuBuenavistaComponent,
    RiuArecasComponent,
    PerfilUsuarioComponent,
    RiuPalaceComponent,
    RiuGaroeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthGuard,
    CookieService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
