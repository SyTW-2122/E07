import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})


export class SignupComponent implements OnInit {

  user = {
    nombre_usuario: "",
    contrasena: "",
    nombre: "",
    apellidos: "",
    telefono: 0,
    dni: "",
    correo_electronico: "",
    fecha_nacimiento: "",
  }

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    console.log("Página cargada");
  }

  signUp() {
    let fecha_actual = new Date();
    let date_nacimiento = new Date(this.user.fecha_nacimiento);
    let edad = fecha_actual.getFullYear() - date_nacimiento.getFullYear();
    var m = fecha_actual.getMonth() - date_nacimiento.getMonth();

    if (m < 0 || (m === 0 && fecha_actual.getDate() < date_nacimiento.getDate())) {
        edad--;
    }

    if (edad >= 18) {
          this.authService.signUp(this.user)
      .subscribe(
        res => {
          console.log(res)
            localStorage.setItem('token', res.token);
            this.router.navigate(['/inicio'])
        },
        err => console.log(err)
      )
    } else {
      alert ("Para registrarte en la plataforma debes tener mínimo 18 años");
    }

  }
}