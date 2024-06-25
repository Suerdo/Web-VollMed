import { Component } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { AutenticacaoService } from '../../../services/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule]
})
export class LoginComponent {
  constructor(private authService: AutenticacaoService, private router: Router) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.authService.efetuarLogin(form.value).subscribe({
        next: (response) => {
          console.log('Login bem-sucedido', response);
          localStorage.setItem('token', response.token); // Armazenar o token
          this.router.navigate(['/home']); // Redirecionar para a página inicial
        },
        error: (error) => {
          console.error('Erro ao efetuar login', error);
        }
      });
    }
  }
}













