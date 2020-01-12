import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators  } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  titulo = 'Cadastro';
  constructor(private router: Router) { }

  ngOnInit() {
  }

  formCadastrar = new FormGroup({
    inputNomeCompleto: new FormControl('', Validators.required),
    inputApelido: new FormControl('', Validators.required),
    inputCPF: new FormControl('', Validators.required),
    inputSexo: new FormControl('', Validators.required),
    inputNascimento: new FormControl('', Validators.required),
    inputCEP: new FormControl('', Validators.required),
    inputCidade: new FormControl('', Validators.required),
    inputEstado: new FormControl('', Validators.required),
    inputEmail: new FormControl('', Validators.required),
    inputTelefone: new FormControl('', Validators.required),
    inputCelular: new FormControl('', Validators.required),
    inputUsuario: new FormControl('', Validators.required),
    inputPassword: new FormControl('', Validators.required)
  });

  /*get inputUsuario(): any { 
    return this.formCadastrar.get('inputUsuario'); 
  }

  get inputPassword(): any { 
    return this.formCadastrar.get('inputPassword'); 
  }*/

  cadastrar() {
    console.log(this.formCadastrar.value);
}

}
