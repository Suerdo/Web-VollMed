import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
import { PacientesService } from './services/pacientes.service';
import { MedicosService } from './services/medicos.service'; 
import { ListarPacientesComponent } from './componentes/pacientes/listar-pacientes/listar-pacientes.component';
import { AdicionarPacienteComponent } from './componentes/pacientes/adicionar-paciente/adicionar-paciente.component';
import { EditarPacienteComponent } from './componentes/pacientes/editar-paciente/editar-paciente.component'; 
import { ExcluirPacienteComponent } from './componentes/pacientes/excluir-paciente/excluir-paciente.component'; 
import { ListarMedicosComponent } from './componentes/medicos/listar-medicos/listar-medicos.component'; 
import { AdicionarMedicoComponent } from './componentes/medicos/adicionar-medico/adicionar-medico.component'; 
import { EditarMedicoComponent } from './componentes/medicos/editar-medico/editar-medico.component'; 
import { ExcluirMedicoComponent } from './componentes/medicos/excluir-medico/excluir-medico.component'; 
import { HttpInterceptorService } from './services/http-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    ListarPacientesComponent,
    AdicionarPacienteComponent,
    EditarPacienteComponent,
    ExcluirPacienteComponent,
    ListarMedicosComponent,
    AdicionarMedicoComponent,
    EditarMedicoComponent,
    ExcluirMedicoComponent
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
    MedicosService, 
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }








