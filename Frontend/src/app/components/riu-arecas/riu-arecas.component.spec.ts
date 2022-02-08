import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiuArecasComponent } from './riu-arecas.component';

describe('RiuArecasComponent', () => {
  let component: RiuArecasComponent;
  let fixture: ComponentFixture<RiuArecasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiuArecasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RiuArecasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
