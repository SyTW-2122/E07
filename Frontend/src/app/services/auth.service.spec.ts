import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;
  let http: HttpClient;

  beforeEach(() => {
    service = new AuthService(http);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
