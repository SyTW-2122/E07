import { HttpClient, HttpClientModule, HttpHandler} from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from 'src/app/services/auth.service';

import { SigninComponent } from './signin.component';

describe('SigninComponent', () => {
  let component: SigninComponent;
  let fixture: ComponentFixture<SigninComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigninComponent ],
      imports: [RouterTestingModule, HttpClientModule],
      providers: [AuthService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Se debería crear el componente', () => {
    expect(component).toBeTruthy();
  });


  it('Hay un formulario con entrada para el nombre de usuario y la contraseña', () => {
    const element = fixture.nativeElement;

    expect(element.querySelector('form')).toBeTruthy();
    expect(element.querySelector('#nombreUsuarioInput')).toBeTruthy();
    expect(element.querySelector('#contrasenaInput')).toBeTruthy();
  });

  it('Se rellenan correctamente los input del formulario', () => {
    const element = fixture.nativeElement;

    element.querySelector('#nombreUsuarioInput').value = "alu0101206574";
    element.querySelector('#contrasenaInput').value = "alu0101206574";

    expect(element.querySelector('#nombreUsuarioInput').value).toEqual("alu0101206574");
    expect(element.querySelector('#contrasenaInput').value).toEqual("alu0101206574");  
  });

  it('Comprobación función signIn()', () => {
    component.user = {
      nombre_usuario: "alu0101206574",
      contrasena: "alu0101206574",
    }
    
    let signInF = spyOn(component, 'signIn')
    component.signIn();
    expect(signInF).toHaveBeenCalled();
  })
});