import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(AuthService);
    localStorage.setItem('token', "Prueba");
  }); 

  it('Se crea el servicio',  async () => {  
    expect(service).toBeTruthy();
  })
 
  it('Comprobación función signUp()', () => {
    let signUpF = spyOn(service, 'signUp')
    service.signUp({nombre_usuario: "alu0101206574", contrasena: "alu0101206574", nombre: "JORGE", apellidos: "GARCIA BORGES", telefono: 603948503, dni: "47926377L", correo_electronico: "alu0101206574@ull.edu.es",  fecha_nacimiento: "2000-12-18"});
    expect(signUpF).toHaveBeenCalled();
  });

  it('Comprobación función signIn()', () => {
    let signInF = spyOn(service, 'signIn')
    service.signIn({nombre_usuario: "alu0101206574", contrasena: "alu0101206574"});
    expect(signInF).toHaveBeenCalled();
  });

  it('Comprobación función inicio()', () => {
    let inicioF = spyOn(service, 'inicio')
    service.inicio();
    expect(inicioF).toHaveBeenCalled();
  });

  it('Comprobación función loggedIn()', () => {
    expect(service.loggedIn()).toBeTruthy();    
  });

  it('Comprobación función getToken()', () => {
    expect(service.getToken()).toEqual('Prueba');
  });
});