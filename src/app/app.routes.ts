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
import { HomeComponent } from './componentes/home/home.component';
import { AuthGuard } from './guards/auth.guard'; 



export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'pacientes', component: ListarPacientesComponent, canActivate: [AuthGuard] },
  { path: 'pacientes/adicionar', component: AdicionarPacienteComponent, canActivate: [AuthGuard] },
  { path: 'pacientes/editar/:id', component: EditarPacienteComponent, canActivate: [AuthGuard] },
  { path: 'pacientes/excluir/:id', component: ExcluirPacienteComponent, canActivate: [AuthGuard] },
  { path: 'medicos', component: ListarMedicosComponent, canActivate: [AuthGuard] },
  { path: 'medicos/adicionar', component: AdicionarMedicoComponent, canActivate: [AuthGuard] },
  { path: 'medicos/editar/:id', component: EditarMedicoComponent, canActivate: [AuthGuard] },
  { path: 'medicos/excluir/:id', component: ExcluirMedicoComponent, canActivate: [AuthGuard] },
  { path: 'consultas', component: ListarConsultasComponent, canActivate: [AuthGuard] },
  { path: 'consultas/adicionar', component: AdicionarConsultaComponent, canActivate: [AuthGuard] },
  { path: 'consultas/excluir/:id', component: ExcluirConsultaComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}












