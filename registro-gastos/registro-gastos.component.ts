import { Component } from '@angular/core';
import { GastosService } from '../gastos.service';


@Component({
  selector: 'app-registro-gastos',
  templateUrl: './registro-gastos.component.html',
  styleUrls: ['./registro-gastos.component.css']
})
export class RegistroGastosComponent {
  gasto={
     monto: '',
     nombre: '',
     ruc: ''
  }

  constructor (private gastosService: GastosService){}

  registrarGastos() {
    this.gastosService.registrarGastos(this.gasto).subscribe(
      (response) => {
        // Procesar la respuesta del backend
        console.log('Usuario registrado exitosamente', response);
      },
      (error) => {
        console.error('Error al registrar el usuario', error);
      }
    );
  }
};
