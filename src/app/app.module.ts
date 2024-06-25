import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; 

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
import { PacientesService } from './services/pacientes.service';
import { MedicosService } from './services/medicos.service'; 
import { ConsultasService } from './services/consultas.service';
import { ListarPacientesComponent } from './componentes/pacientes/listar-pacientes/listar-pacientes.component';
import { AdicionarPacienteComponent } from './componentes/pacientes/adicionar-paciente/adicionar-paciente.component';
import { EditarPacienteComponent } from './componentes/pacientes/editar-paciente/editar-paciente.component'; 
import { ExcluirPacienteComponent } from './componentes/pacientes/excluir-paciente/excluir-paciente.component'; 
import { ListarMedicosComponent } from './componentes/medicos/listar-medicos/listar-medicos.component'; 
import { AdicionarMedicoComponent } from './componentes/medicos/adicionar-medico/adicionar-medico.component'; 
import { EditarMedicoComponent } from './componentes/medicos/editar-medico/editar-medico.component'; 
import { ExcluirMedicoComponent } from './componentes/medicos/excluir-medico/excluir-medico.component'; 
import { ListarConsultasComponent } from './componentes/consultas/listar-consultas/listar-consultas.component';
import { AdicionarConsultaComponent } from './componentes/consultas/adicionar-consulta/adicionar-consulta.component';
import { ExcluirConsultaComponent } from './componentes/consultas/excluir-consulta/excluir-consulta.component';
import { HttpInterceptorService } from './services/http-interceptor.service';

@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    CommonModule
  ],
  providers: [
    PacientesService,
    MedicosService,
    ConsultasService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }





















