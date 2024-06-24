import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MedicosService } from '../../../services/medicos.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-excluir-medico',
  templateUrl: './excluir-medico.component.html',
  styleUrls: ['./excluir-medico.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class ExcluirMedicoComponent implements OnInit {
  medico: any;

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

  excluirMedico(): void {
    if (this.medico && this.medico.id) {
      this.medicosService.excluirMedico(this.medico.id).subscribe({
        next: () => {
          console.log('Médico excluído com sucesso');
          this.router.navigate(['/medicos']);
        },
        error: (error) => {
          console.error('Erro ao excluir médico', error);
        }
      });
    }
  }

  voltar(): void {
    this.router.navigate(['/medicos']);
  }
}

