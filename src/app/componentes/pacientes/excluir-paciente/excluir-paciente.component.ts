import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PacientesService } from '../../../services/pacientes.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-excluir-paciente',
  templateUrl: './excluir-paciente.component.html',
  styleUrls: ['./excluir-paciente.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class ExcluirPacienteComponent implements OnInit {
  pacienteId: number | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pacientesService: PacientesService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.pacienteId = Number(id);
    }
  }

  excluirPaciente(): void {
    if (this.pacienteId !== undefined) {
      this.pacientesService.excluirPaciente(this.pacienteId).subscribe({
        next: () => {
          console.log('Paciente excluído com sucesso');
          this.router.navigate(['/pacientes']);
        },
        error: (error) => {
          console.error('Erro ao excluir paciente', error);
        }
      });
    }
  }

  cancelar(): void {
    this.router.navigate(['/pacientes']);
  }
}


