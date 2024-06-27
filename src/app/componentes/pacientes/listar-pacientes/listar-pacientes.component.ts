import { Component, OnInit } from '@angular/core';
import { PacientesService } from '../../../services/pacientes.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-listar-pacientes',
  templateUrl: './listar-pacientes.component.html',
  styleUrls: ['./listar-pacientes.component.css'],
  standalone: true,
  imports: [RouterModule, CommonModule] 
})
export class ListarPacientesComponent implements OnInit {
  pacientes: any[] = [];

  constructor(private pacientesService: PacientesService) { }

  ngOnInit(): void {
    this.pacientesService.getPacientes().subscribe(data => {
      this.pacientes = data.content;
    });
  }
}



