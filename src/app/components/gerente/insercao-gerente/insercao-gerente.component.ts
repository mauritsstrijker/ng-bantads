import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'insercao-gerente',
  templateUrl: './insercao-gerente.component.html',
  styleUrls: ['./insercao-gerente.component.scss'],
})
export class InserirGerenteComponent implements OnInit {
  @ViewChild('gerenteForm') gerenteForm!: NgForm;
  gerente: any = {};
  senha: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  inserir(): void {
    if (this.gerenteForm.form.valid) {
      console.log('Gerente inserido:', this.gerente);
    }
  }
}
