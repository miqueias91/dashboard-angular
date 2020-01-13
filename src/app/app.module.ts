import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule }        from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CriarContaComponent } from './criar-conta/criar-conta.component';
import { LoginContaComponent } from './login-conta/login-conta.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListagemComponent } from './dashboard/listagem/listagem.component';
import { CadastroComponent } from './dashboard/cadastro/cadastro.component';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'  
import { NgxMaskModule } from 'ngx-mask'

@NgModule({
  declarations: [
    AppComponent,
    CriarContaComponent,
    LoginContaComponent,
    SobreNosComponent,
    ErrorComponent,
    HomeComponent,
    DashboardComponent,
    ListagemComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    BrowserAnimationsModule,
    NgxMaskModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }