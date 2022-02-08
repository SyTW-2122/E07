import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiuPalaceComponent } from './riu-palace.component';

describe('RiuPalaceComponent', () => {
  let component: RiuPalaceComponent;
  let fixture: ComponentFixture<RiuPalaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiuPalaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RiuPalaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
