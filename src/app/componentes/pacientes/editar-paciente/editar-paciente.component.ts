import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { PacientesService } from '../../../services/pacientes.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar-paciente',
  templateUrl: './editar-paciente.component.html',
  styleUrls: ['./editar-paciente.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class EditarPacienteComponent implements OnInit {
  paciente: any = {
    endereco: {} // Inicializar endereco como um objeto vazio
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pacientesService: PacientesService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.pacientesService.getPaciente(Number(id)).subscribe({
        next: (data) => {
          this.paciente = data;
        },
        error: (error) => {
          console.error('Erro ao carregar paciente', error);
        }
      });
    }
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      const updatedPaciente = {
        ...form.value,
        id: this.paciente.id, // Certifique-se de que o ID está incluído nos dados
        endereco: {
          ...form.value.endereco,
          id: this.paciente.endereco.id // Certifique-se de que o ID do endereço está incluído
        }
      };
      this.pacientesService.atualizarPaciente(this.paciente.id, updatedPaciente).subscribe({
        next: (response) => {
          console.log('Paciente atualizado com sucesso', response);
          this.router.navigate(['/pacientes']);
        },
        error: (error) => {
          console.error('Erro ao atualizar paciente', error);
          console.log('Detalhes do erro:', error.error);
        }
      });
    } else {
      console.log('Formulário inválido');
    }
  }

  voltar() {
    this.router.navigate(['/pacientes']);
  }
}




