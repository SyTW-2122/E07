import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';

import { TokenInterceptorService } from './token-interceptor.service';

describe('TokenInterceptorService', () => {
  let service: TokenInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [AuthService]
    });
    service = TestBed.inject(TokenInterceptorService);
  });

  it('Creación del servicio', () => {
    expect(service).toBeTruthy();
  });
});
