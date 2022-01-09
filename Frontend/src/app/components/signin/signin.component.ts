import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})

export class SigninComponent implements OnInit {
  user = {
    nombre_usuario: "",
    contrasena: "",
  }

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    console.log("Página cargada")
  }

  signIn() {
    this.authService.signIn(this.user).subscribe(
      res => {
        localStorage.setItem('token', res.token);
        this.router.navigate(['/inicio'])
      },      
      err => console.log(err)
    )
  }
}
