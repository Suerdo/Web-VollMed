import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,  // Certifique-se de que AppRoutingModule está importado
    RouterModule  // Certifique-se de importar RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }






