import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface PeriodicElement {
  inputNomeCompleto: string;
  inputApelido: string;
  inputCPF: string;
  inputSexo: string;
  inputNascimento: string;
  inputCEP: string;
  inputCidade: string;
  inputEstado: string;
  inputEmail: string;
  inputTelefone: string;
  inputCelular: string;
  inputUsuario: string;
}

const ELEMENT_DATA: PeriodicElement[] = JSON.parse(localStorage.getItem('lista-cadastro'));


/**
 * @title Basic use of `<table mat-table>`
 */

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})

export class ListagemComponent implements OnInit {
  titulo = "Listagem";
  constructor(private router: Router) { }

  displayedColumns: string[] = ['inputNomeCompleto', 'inputApelido', 'inputCPF', 'inputSexo', 'inputNascimento', 'inputCEP', 'inputCidade', 'inputEstado', 'inputEmail', 'inputTelefone', 'inputCelular', 'inputUsuario'];
  dataSource = ELEMENT_DATA;

  ngOnInit() {
  }

}
