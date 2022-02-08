import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiuGaroeComponent } from './riu-garoe.component';

describe('RiuGaroeComponent', () => {
  let component: RiuGaroeComponent;
  let fixture: ComponentFixture<RiuGaroeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiuGaroeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RiuGaroeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
