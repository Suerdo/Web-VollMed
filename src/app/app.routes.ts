import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './componentes/autenticacao/login/login.component';
import { RegisterComponent } from './componentes/autenticacao/register/register.component';
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


export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'pacientes', component: ListarPacientesComponent },
  { path: 'pacientes/adicionar', component: AdicionarPacienteComponent },
  { path: 'pacientes/editar/:id', component: EditarPacienteComponent },
  { path: 'pacientes/excluir/:id', component: ExcluirPacienteComponent },
  { path: 'medicos', component: ListarMedicosComponent },
  { path: 'medicos/adicionar', component: AdicionarMedicoComponent },
  { path: 'medicos/editar/:id', component: EditarMedicoComponent },
  { path: 'medicos/excluir/:id', component: ExcluirMedicoComponent },
  { path: 'consultas', component: ListarConsultasComponent },
  { path: 'consultas/adicionar', component: AdicionarConsultaComponent },
  { path: 'consultas/excluir/:id', component: ExcluirConsultaComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}












