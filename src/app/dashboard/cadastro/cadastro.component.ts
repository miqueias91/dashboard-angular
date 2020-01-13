import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators  } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})

export class CadastroComponent implements OnInit {
  titulo = 'Cadastro';
  lista_cadastro = JSON.parse(localStorage.getItem('lista-cadastro') || '[]');
  
  constructor(private router: Router, private http: HttpClient) { }

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

  existeCampoIncompleto() {
    if(this.formCadastrar.get('inputNomeCompleto').invalid){
      return true;
    }
    else if(this.formCadastrar.get('inputApelido').invalid){
      return true;
    }
    else if(this.formCadastrar.get('inputCPF').invalid){
      return true;
    }
    else if(this.formCadastrar.get('inputSexo').invalid){
      return true;
    }
    else if(this.formCadastrar.get('inputNascimento').invalid){
      return true;
    }
    else if(this.formCadastrar.get('inputCEP').invalid){
      return true;
    }
    else if(this.formCadastrar.get('inputCidade').invalid){
      return true;
    }
    else if(this.formCadastrar.get('inputEstado').invalid){
      return true;
    }
    else if(this.formCadastrar.get('inputEmail').invalid){
      return true;
    }
    else if(this.formCadastrar.get('inputTelefone').invalid){
      return true;
    }
    else if(this.formCadastrar.get('inputCelular').invalid){
      return true;
    }
    else if(this.formCadastrar.get('inputUsuario').invalid){
      return true;
    }
    else if(this.formCadastrar.get('inputPassword').invalid){
      return true;
    }
    return false;
  }

  cadastrar() { 
    if(this.existeCampoIncompleto()){
      alert("Existem campos incompletos.");
    }
    else{
      this.lista_cadastro.push(this.formCadastrar.value);
      localStorage.setItem("lista-cadastro", JSON.stringify(this.lista_cadastro));
      alert("Salvo com sucesso.");
      location.reload();
    }
  }

}
