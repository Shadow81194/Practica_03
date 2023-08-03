import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaGastosComponent } from './consulta-gastos.component';

describe('ConsultaGastosComponent', () => {
  let component: ConsultaGastosComponent;
  let fixture: ComponentFixture<ConsultaGastosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultaGastosComponent]
    });
    fixture = TestBed.createComponent(ConsultaGastosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
