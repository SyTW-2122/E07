import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from 'src/app/services/auth.service';

import { SignupComponent } from './signup.component';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupComponent ],
      imports: [RouterTestingModule, HttpClientModule],
      providers: [AuthService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Creación del componente', () => {
    expect(component).toBeTruthy();
  });

  it('Hay un formulario con entrada para el nombre de usuario, la contraseña, el nombre, los apellidos, el teléfono, el DNI, el correo electrónico y la fecha de nacimiento', () => {
    const element = fixture.nativeElement;

    expect(element.querySelector('form')).toBeTruthy();
    expect(element.querySelector('#nombreUsuarioInput')).toBeTruthy();
    expect(element.querySelector('#contrasenaInput')).toBeTruthy();
    expect(element.querySelector('#nombreInput')).toBeTruthy();
    expect(element.querySelector('#apellidosInput')).toBeTruthy();
    expect(element.querySelector('#fechaNacimientoInput')).toBeTruthy();
    expect(element.querySelector('#telefonoInput')).toBeTruthy();
    expect(element.querySelector('#dniInput')).toBeTruthy();
    expect(element.querySelector('#correoInput')).toBeTruthy();
  });

  it('Se rellenan correctamente los input del formulario', () => {
    const element = fixture.nativeElement;

    element.querySelector('#nombreUsuarioInput').value = "alu0101206574";
    element.querySelector('#contrasenaInput').value = "alu0101206574";
    element.querySelector('#nombreInput').value = "JORGE";
    element.querySelector('#apellidosInput').value = "GARCIA BORGES";
    element.querySelector('#fechaNacimientoInput').value = "2000-12-18",
    element.querySelector('#telefonoInput').value = 603948503;
    element.querySelector('#dniInput').value = "47926377L";
    element.querySelector('#correoInput').value = "alu0101206574@ull.edu.es";

    expect(element.querySelector('#nombreUsuarioInput').value).toEqual("alu0101206574");
    expect(element.querySelector('#contrasenaInput').value).toEqual("alu0101206574");
    expect(element.querySelector('#nombreInput').value).toEqual("JORGE");
    expect(element.querySelector('#apellidosInput').value).toEqual("GARCIA BORGES");
    expect(element.querySelector('#fechaNacimientoInput').value).toEqual("2000-12-18");
    expect(element.querySelector('#telefonoInput').value).toEqual("603948503");
    expect(element.querySelector('#dniInput').value).toEqual("47926377L");
    expect(element.querySelector('#correoInput').value).toEqual("alu0101206574@ull.edu.es");
  });

  it('Comprobación función signUn()', () => {
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
    
    let signUpF = spyOn(component, 'signUp')
    component.signUp();
    expect(signUpF).toHaveBeenCalled();
  })
});
