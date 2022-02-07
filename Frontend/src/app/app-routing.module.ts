import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import {SignupComponent} from './components/signup/signup.component'
import {SigninComponent} from './components/signin/signin.component'
import { InicioComponent } from './components/inicio/inicio.component';

import { AuthGuard } from './auth.guard';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
