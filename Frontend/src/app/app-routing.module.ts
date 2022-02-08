import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import {SignupComponent} from './components/signup/signup.component'
import {SigninComponent} from './components/signin/signin.component'
import { InicioComponent } from './components/inicio/inicio.component';

import { AuthGuard } from './auth.guard';
import { RiuBuenavistaComponent } from './components/riu-buenavista/riu-buenavista.component';
import { RiuArecasComponent } from './components/riu-arecas/riu-arecas.component';
import { PerfilUsuarioComponent } from './components/perfil-usuario/perfil-usuario.component';
import { RiuPalaceComponent } from './components/riu-palace/riu-palace.component';
import { RiuGaroeComponent } from './components/riu-garoe/riu-garoe.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full'
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'inicio',
    component: InicioComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'riu-buenavista',
    component: RiuBuenavistaComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'riu-arecas',
    component: RiuArecasComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'riu-palace',
    component: RiuPalaceComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'riu-garoe',
    component: RiuGaroeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'perfil-usuario',
    component: PerfilUsuarioComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
