import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConsultasService } from '../../../services/consultas.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-excluir-consulta',
  templateUrl: './excluir-consulta.component.html',
  styleUrls: ['./excluir-consulta.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class ExcluirConsultaComponent implements OnInit {
  consultaId: number | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private consultasService: ConsultasService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.consultaId = Number(id);
      console.log('Consulta ID:', this.consultaId); // Adicione este log
    } else {
      console.error('ID da consulta não encontrado na rota');
    }
  }

  excluirConsulta(): void {
    console.log('Excluir consulta chamada com ID:', this.consultaId); // Adicione este log
    if (this.consultaId) {
      this.consultasService.excluirConsulta(this.consultaId).subscribe({
        next: () => {
          console.log('Consulta excluída com sucesso'); // Adicione este log
          this.router.navigate(['/consultas']);
        },
        error: (error) => {
          console.error('Erro ao excluir consulta', error);
        }
      });
    }
  }

  voltar(): void {
    this.router.navigate(['/consultas']);
  }
}


















