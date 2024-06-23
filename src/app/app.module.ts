import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/autenticacao/login/login.component';
import { AppRoutingModule } from './app.routes'; 

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,  // Certifique-se de que FormsModule está aqui
    AppRoutingModule  // Importa o módulo de rotas corretamente
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

