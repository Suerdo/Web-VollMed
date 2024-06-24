import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
import { PacientesService } from './services/pacientes.service';
import { ListarPacientesComponent } from './componentes/pacientes/listar-pacientes/listar-pacientes.component';
import { AdicionarPacienteComponent } from './componentes/pacientes/adicionar-paciente/adicionar-paciente.component';
import { HttpInterceptorService } from './services/http-interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    ListarPacientesComponent,
    AdicionarPacienteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    RouterModule
  ],
  providers: [
    PacientesService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true } 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }







