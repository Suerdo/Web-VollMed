import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ConsultasService } from '../../../services/consultas.service';

@Component({
  standalone: true,
  selector: 'app-listar-consultas',
  templateUrl: './listar-consultas.component.html',
  styleUrls: ['./listar-consultas.component.css'],
  imports: [CommonModule, FormsModule, RouterModule]
})
export class ListarConsultasComponent implements OnInit {
  consultas: any[] = [];

  constructor(private consultasService: ConsultasService) {}

  ngOnInit(): void {
    this.consultasService.getConsultas().subscribe(
      data => {
        this.consultas = data.content;
      },
      error => {
        console.error('Erro ao carregar consultas', error);
      }
    );
  }


}












