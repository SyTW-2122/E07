import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})


export class SignupComponent implements OnInit {

  user = {
    "nombre_usuario": "",
    'contrasena': "",
    'nombre': "",
    'apellidos': "",
    'telefono': 0,
    'dni': "",
    'correo_electronico': "",
    'fecha_nacimiento': "",
  }

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  signUp() {
    this.authService.signUp(this.user).subscribe(res => console.log(res), err => console.log(err))
  }
}