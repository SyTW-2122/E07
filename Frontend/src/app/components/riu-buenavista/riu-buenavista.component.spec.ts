import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiuBuenavistaComponent } from './riu-buenavista.component';

describe('RiuBuenavistaComponent', () => {
  let component: RiuBuenavistaComponent;
  let fixture: ComponentFixture<RiuBuenavistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiuBuenavistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RiuBuenavistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
