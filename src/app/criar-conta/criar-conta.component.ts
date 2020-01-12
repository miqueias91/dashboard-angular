import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators  } from '@angular/forms';

@Component({
  selector: 'app-criar-conta',
  templateUrl: './criar-conta.component.html',
  styleUrls: ['./criar-conta.component.css']
})
export class CriarContaComponent implements OnInit {
  title = 'Criar Conta';
  formCriarConta = new FormGroup({
    inputNovoUsuario: new FormControl('', Validators.required),
    inputNovaPassword: new FormControl('', Validators.required),
    inputNovaPasswordRepeat: new FormControl('', Validators.required),
  });
  constructor(private router: Router) { }

  ngOnInit() {
  }

  criarConta (){
  }

}
