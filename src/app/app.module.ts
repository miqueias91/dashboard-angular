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
@NgModule({
  declarations: [
    AppComponent,
    CriarContaComponent,
    LoginContaComponent,
    SobreNosComponent,
    ErrorComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }