import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GastosService {
  private apiUrl = 'http://localhost:3000/api/gastos';
  constructor(private http: HttpClient) { }

  registrarGastos(gasto: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, gasto);
  }

  obtenerGastos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  deshabilitarGastos(id: string): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}/deshabilitar`, {});
  }



}
