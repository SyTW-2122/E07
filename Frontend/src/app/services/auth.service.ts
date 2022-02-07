import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private URL = 'http://10.6.131.175:80/'

  constructor(private http: HttpClient) { }

  signUp(user: any) {
    return this.http.post<any>(this.URL + 'signup', user);
  }

  signIn(user: any) {
    return this.http.post<any>(this.URL + 'signin', user);
  }

  inicio() {
    return this.http.get(this.URL + 'inicio');
  }

  loggedIn() {
    return !!localStorage.getItem('token'); // Si el token existe retorna true y si no retorna false;
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
