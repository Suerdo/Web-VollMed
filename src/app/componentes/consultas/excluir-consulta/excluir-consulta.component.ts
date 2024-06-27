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
  consulta: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private consultasService: ConsultasService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('ID da consulta na rota:', id);

    if (id && !isNaN(Number(id))) {
        this.consultasService.getConsultaPorId(Number(id)).subscribe({
            next: (data) => {
                this.consulta = data;
                console.log('Consulta carregada:', this.consulta);
            },
            error: (error) => {
                console.error('Erro ao carregar consulta', error);
            }
        });
    } else {
        console.error('ID inválido:', id);
    }
  }

  excluirConsulta(): void {
    if (this.consulta && this.consulta.id) {
        console.log('ID da consulta para exclusão:', this.consulta.id);
        this.consultasService.excluirConsulta(this.consulta.id).subscribe({
            next: () => {
                console.log('Consulta excluída com sucesso');
                this.router.navigate(['/consultas']);
            },
            error: (error) => {
                console.error('Erro ao excluir consulta', error);
            }
        });
    } else {
        console.error('ID da consulta não disponível para exclusão');
    }
  }

  voltar(): void {
    this.router.navigate(['/consultas']);
  }
}





















