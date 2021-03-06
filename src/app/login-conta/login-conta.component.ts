import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators  } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-conta',
  templateUrl: './login-conta.component.html',
  styleUrls: ['./login-conta.component.css']
})
export class LoginContaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

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
  
  logar() {
      console.log(this.formLogar.value);
      this.router.navigate(['dashboard']);    
  }

}
