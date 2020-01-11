import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators  } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Angular Dashboard';
  numero = 1;
  formLogar = new FormGroup({
    inputUsuario: new FormControl('', Validators.required),
    inputPassword: new FormControl('', Validators.required)
  });

  get inputUsuario(): any { 
    return this.formLogar.get('inputUsuario'); 
  }

  get inputPassword(): any { 
    return this.formLogar.get('inputPassword'); 
  }
  constructor(private router: Router){}
 
  logar() {
      this.numero++;
      console.log(this.formLogar.value);    
  }
  redirect() {
    this.router.navigate(['/criarConta']);
}
    

}
