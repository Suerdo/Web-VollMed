import { Component } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';  // Importar FormsModule
import { CommonModule } from '@angular/common';  // Importar CommonModule
import { AutenticacaoService } from '../../../services/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]  // Incluir CommonModule e FormsModule
})
export class LoginComponent {
  constructor(private authService: AutenticacaoService) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.authService.efetuarLogin(form.value).subscribe({
        next: (response) => {
          console.log('Login bem-sucedido', response);
          // Aqui você pode armazenar o token recebido e redirecionar o usuário
        },
        error: (error) => {
          console.error('Erro ao efetuar login', error);
          // Mostrar mensagem de erro
        }
      });
    }
  }
}




