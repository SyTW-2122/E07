import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private URL = 'http://10.6.131.175:80/'

  constructor(private http: HttpClient, private router: Router) { }

  signUp(user: any) {
    return this.http.post<any>(this.URL + 'signup', user);
  }

  signIn(user: any) {
    return this.http.post<any>(this.URL + 'signin', user);
  }

  inicio() {
    return this.http.get(this.URL + 'inicio');
  }

  perfil_usuario() {
    return this.http.get(this.URL + 'perfil-usuario');
  }

  reserva_hotel(reserva: any) {
    return this.http.post(this.URL + 'reserva-hotel', reserva);
  }

  obtener_reservas() {
    return this.http.get(this.URL + 'perfil-reservas');
  }

  loggedIn() {
    return !!localStorage.getItem('token'); // Si el token existe retorna true y si no retorna false;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/inicio'])
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
