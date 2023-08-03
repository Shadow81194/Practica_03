import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from './User';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpclient: HttpClient) {
    console.log('El servicio Http esta funcionando para User…')
  }
  obtenerDatos(){
    return this.httpclient.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }
}