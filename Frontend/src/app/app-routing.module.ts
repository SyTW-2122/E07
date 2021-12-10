import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import {SignupComponent} from './components/signup/signup.component'
import {SigninComponent} from './components/signin/signin.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: '/signup',
    pathMatch: 'full'
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
