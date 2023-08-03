import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InfomacionComponent } from './infomacion/infomacion.component';
import { MenuComponent } from './menu/menu.component';
import { FormularioComponent } from './formulario/formulario.component';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RepoteService } from './repote.service';
import { ReporteComponent } from './reporte/reporte.component';
import { RouterModule, Route } from '@angular/router';
import { GastosComponent } from './gastos/gastos.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { UserService } from './user.service';
import { ConsultaGastosComponent } from './consulta-gastos/consulta-gastos.component';
import { RegistroGastosComponent } from './registro-gastos/registro-gastos.component';

const rutas:Route[]=[
  {path: 'infomacion', component:InfomacionComponent},
  {path: 'registro', component:FormularioComponent},
  {path: 'resporte', component:ReporteComponent},
  {path: 'gastos', component:GastosComponent},
  {path: 'usuario', component:UsuarioComponent},
  {path: 'consulta-gastos', component:ConsultaGastosComponent},
  {path: 'registro-gastos', component:RegistroGastosComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    InfomacionComponent,
    FormularioComponent,
    ReporteComponent,
    GastosComponent,
    UsuarioComponent,
    RegistroGastosComponent,
    ConsultaGastosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [RepoteService, UserService],
  bootstrap: [AppComponent]
})


export class AppModule { }
