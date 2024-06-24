import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PacientesService } from '../../../services/pacientes.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-adicionar-paciente',
  templateUrl: './adicionar-paciente.component.html',
  styleUrls: ['./adicionar-paciente.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class AdicionarPacienteComponent {

  constructor(private pacientesService: PacientesService, private router: Router) { }

  onSubmit(form: NgForm) {
    if (form.valid) {
      const formData = {
        nome: form.value.nome,
        email: form.value.email,
        telefone: form.value.telefone,
        endereco: form.value.endereco
      };
      console.log('Formulário enviado:', formData); // Log para verificar os dados do formulário
      this.pacientesService.adicionarPaciente(formData).subscribe({
        next: (response) => {
          console.log('Paciente adicionado com sucesso', response);
          this.router.navigate(['/pacientes']);
        },
        error: (error) => {
          console.error('Erro ao adicionar paciente', error);
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








