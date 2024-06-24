import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { MedicosService } from '../../../services/medicos.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar-medico',
  templateUrl: './editar-medico.component.html',
  styleUrls: ['./editar-medico.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class EditarMedicoComponent implements OnInit {
  medico: any = {
    endereco: {} // Inicializar endereco como um objeto vazio
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private medicosService: MedicosService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.medicosService.getMedico(Number(id)).subscribe({
        next: (data) => {
          this.medico = data;
        },
        error: (error) => {
          console.error('Erro ao carregar médico', error);
        }
      });
    }
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      const updatedMedico = {
        id: this.medico.id,
        nome: form.value.nome,
        telefone: form.value.telefone,
        endereco: form.value.endereco
      };
      this.medicosService.atualizarMedico(this.medico.id, updatedMedico).subscribe({
        next: (response) => {
          console.log('Médico atualizado com sucesso', response);
          this.router.navigate(['/medicos']);
        },
        error: (error) => {
          console.error('Erro ao atualizar médico', error);
          console.log('Detalhes do erro:', error.error);
        }
      });
    } else {
      console.log('Formulário inválido');
    }
  }

  voltar(): void {
    this.router.navigate(['/medicos']);
  }
}



