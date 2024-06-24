import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MedicosService } from '../../../services/medicos.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-adicionar-medico',
  templateUrl: './adicionar-medico.component.html',
  styleUrls: ['./adicionar-medico.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class AdicionarMedicoComponent {

  constructor(private medicosService: MedicosService, private router: Router) { }

  onSubmit(form: NgForm) {
    if (form.valid) {
      const formData = {
        nome: form.value.nome,
        email: form.value.email,
        telefone: form.value.telefone,
        crm: form.value.crm,
        especialidade: form.value.especialidade,
        endereco: form.value.endereco
      };
      console.log('Formulário enviado:', formData); // Log para verificar os dados do formulário
      this.medicosService.adicionarMedico(formData).subscribe({
        next: (response) => {
          console.log('Médico adicionado com sucesso', response);
          this.router.navigate(['/medicos']);
        },
        error: (error) => {
          console.error('Erro ao adicionar médico', error);
          console.log('Detalhes do erro:', error.error);
        }
      });
    } else {
      console.log('Formulário inválido');
    }
  }

  voltar() {
    this.router.navigate(['/medicos']);
  }
}


