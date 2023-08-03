import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../User';
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit{
  usuarios:User[]=[];
 constructor(public userService:UserService) {
 this.userService.obtenerDatos().subscribe(data =>
 {
 console.log(data);
 this.usuarios=data;
 });

  }
  ngOnInit():void {}
}