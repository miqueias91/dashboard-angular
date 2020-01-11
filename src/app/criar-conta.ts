import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators  } from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './criar-conta.html'
})

export class CriarConta {
    private route: ActivatedRoute;
    titleNovaConta = 'Criar conta'
    formNovaConta = new FormGroup({
        inputNovoUsuario: new FormControl('', Validators.required),
        inputNovaPassword: new FormControl('', Validators.required)
    });

    get inputNovoUsuario(): any { 
        return this.formNovaConta.get('inputNovoUsuario'); 
    }

    get inputNovaPassword(): any { 
        return this.formNovaConta.get('inputNovaPassword'); 
    }
    constructor(){}

    novaConta() {
        console.log(this.formNovaConta.value);    
    }
}