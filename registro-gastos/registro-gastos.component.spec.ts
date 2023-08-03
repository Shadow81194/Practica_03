import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroGastosComponent } from './registro-gastos.component';

describe('RegistroGastosComponent', () => {
  let component: RegistroGastosComponent;
  let fixture: ComponentFixture<RegistroGastosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroGastosComponent]
    });
    fixture = TestBed.createComponent(RegistroGastosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
