import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
