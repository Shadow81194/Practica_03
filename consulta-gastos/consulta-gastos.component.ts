import { Component } from '@angular/core';
import { GastosService } from '../gastos.service';

@Component({
  selector: 'app-consulta-gastos',
  templateUrl: './consulta-gastos.component.html',
  styleUrls: ['./consulta-gastos.component.css']
})
export class ConsultaGastosComponent {
  
  gastos: any[] = []; // Asignar un valor inicial vacío []

  constructor(private gastoService: GastosService) {}

  ngOnInit(): void {
    this.obtenerGastos();
  }

  obtenerGastos(): void {
    this.gastoService.obtenerGastos().subscribe(
      (response) => {
        this.gastos = response;
      },
      (error) => {
        console.error('Error al obtener los usuarios', error);
      }
    );
  }

}
