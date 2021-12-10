import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

  signIn() {
    console.log(this.user);
  }
}
