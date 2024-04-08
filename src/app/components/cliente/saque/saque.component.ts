import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-saque',
  standalone: true,
  imports: [
    InputNumberModule,
    ButtonModule,
    CardModule,
    InputTextModule,
    DialogModule,
    CurrencyPipe,
    FormsModule,
  ],
  templateUrl: './saque.component.html',
  styleUrls: ['./saque.component.scss'],
})
export class SaqueComponent {
  saldoDisponivel = 15605;
  valorSaque: number | undefined;
  valorRestante: number | undefined;
  visible = false;

  constructor(private currencyPipe: CurrencyPipe) {}

  abrirConfirmacaoSaque() {
    this.valorRestante = this.saldoDisponivel - (this.valorSaque || 0);
    this.visible = true;
  }

  confirmarSaque() {
    if (this.valorSaque && this.valorSaque > 0) {
      console.log(`Saque de R$ ${this.valorSaque} realizado.`);
      this.saldoDisponivel -= this.valorSaque;
      this.valorSaque = undefined;
      this.valorRestante = undefined;
      this.visible = false;
    } else {
      console.error('O valor do saque não é válido.');
    }
  }
}
