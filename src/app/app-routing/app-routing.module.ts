import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginContaComponent } from '../login-conta/login-conta.component';
import {CriarContaComponent  } from "../criar-conta/criar-conta.component";
import { SobreNosComponent } from "../sobre-nos/sobre-nos.component";
import { ErrorComponent } from "../error/error.component";
import { HomeComponent } from "../home/home.component";
import { DashboardComponent } from "../dashboard/dashboard.component";
import { ListagemComponent } from "../dashboard/listagem/listagem.component";
import { CadastroComponent } from "../dashboard/cadastro/cadastro.component";

const appRoutes: Routes = [
  { path: 'login-conta', component: LoginContaComponent },
  { path: 'criar-conta', component: CriarContaComponent },
  { path: 'sobre', component: SobreNosComponent },
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'dashboard-listagem', component: ListagemComponent },
  { path: 'dashboard-cadastro', component: CadastroComponent },
  { path: '', redirectTo: '/login-conta', pathMatch: 'full' },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  exports: [ 
    RouterModule 
  ]
})
export class AppRoutingModule { }
