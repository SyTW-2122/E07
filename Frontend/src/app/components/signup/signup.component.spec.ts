import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthService } from 'src/app/services/auth.service';

import { SignupComponent } from './signup.component';

describe('SignupComponent', () => {
  let service: AuthService;
  let component: SignupComponent;

  beforeEach(() => {
    component = new SignupComponent(service)
  });

  // Comprobamos que se crea un objeto de la clase SignUp
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Comprobamos que cuando se crea el usuario se nos devuelve el token correspondiente a este usuario
  it('Se ha iniciado sesión y se ha devuelto el token JWT', () => {
    component.user = {
      nombre_usuario: "alu0101206574",
      contrasena: "alu0101206574",
      nombre: "JORGE",
      apellidos: "GARCIA BORGES",
      telefono: 603948503,
      dni: "47926377L",
      correo_electronico: "alu0101206574@ull.edu.es",
      fecha_nacimiento: "2000-12-18",
    }

    component.signUp();

    expect(component.user.token).not.toEqual("")
  });
});
