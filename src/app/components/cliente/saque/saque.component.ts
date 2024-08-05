import { Component, inject, OnInit } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import {
  ContaService,
  TransacaoDTO,
} from '../../shared/services/conta.service';
import { LoginService } from '../../shared/services/login.service';

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
export class SaqueComponent implements OnInit {
  saldoDisponivel = 15605;
  valorSaque: number | undefined;
  valorRestante: number | undefined;
  visible = false;

  contaService = inject(ContaService);

  loginService = inject(LoginService);

  constructor(private currencyPipe: CurrencyPipe) {}
  ngOnInit(): void {
    this.contaService.buscarSaldo().subscribe({
      next: (response) => {
        this.saldoDisponivel = response;
      },
    });
  }

  abrirConfirmacaoSaque() {
    this.valorRestante = this.saldoDisponivel - (this.valorSaque || 0);
    this.visible = true;
  }

  confirmarSaque() {
    if (this.valorSaque && this.valorSaque > 0) {
      console.log(`Saque de R$ ${this.valorSaque} realizado.`);

      var command: TransacaoDTO = {
        idCliente: parseFloat(this.loginService.usuarioLogado.contaId),
        tipoTransacao: 2,
        valorTransacao: this.valorSaque,
        data: new Date().toISOString(),
      };
      this.saldoDisponivel -= this.valorSaque;
      this.valorSaque = undefined;
      this.valorRestante = undefined;

      this.contaService.sacar(command).subscribe({
        next: () => {},
      });
      this.visible = false;
    } else {
      console.error('O valor do saque não é válido.');
    }
  }
}
