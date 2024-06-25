import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ConsultasService } from '../../../services/consultas.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-adicionar-consulta',
  templateUrl: './adicionar-consulta.component.html',
  styleUrls: ['./adicionar-consulta.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule]
})
export class AdicionarConsultaComponent {
  consulta = {
    idMedico: null,
    idPaciente: null,
    data: ''
  };

  constructor(private consultasService: ConsultasService, private router: Router) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.consultasService.agendarConsulta(this.consulta).subscribe({
        next: (response) => {
          console.log('Consulta agendada com sucesso', response);
          this.router.navigate(['/consultas']);
        },
        error: (error) => {
          console.error('Erro ao agendar consulta', error);
          console.log('Detalhes do erro:', error.error);
        }
      });
    } else {
      console.log('Formulário inválido');
    }
  }

  voltar() {
    this.router.navigate(['/consultas']);
  }
}




