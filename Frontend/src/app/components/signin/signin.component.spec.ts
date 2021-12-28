import { HttpClient} from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';

import { SigninComponent } from './signin.component';

describe('SigninComponent', () => {
  let component: SigninComponent;
  let authService: AuthService;
  let http: HttpClient;

  beforeEach(() => {
    component = new SigninComponent(authService)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Comprobamos que se devuelve un token JWT
  it('Se ha iniciado sesión y se ha devuelto el token JWT', () => {
    component.user = {
      nombre_usuario: "alu0101206479",
      contrasena: "alu0101206479",
    }

    component.signIn();

    expect(component.user.token).not.toEqual("")
  });
});
