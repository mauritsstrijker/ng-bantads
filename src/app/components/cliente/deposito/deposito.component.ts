import { Component, inject } from '@angular/core';
import { InputNumberModule } from 'primeng/inputnumber';
import { Button, ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputMaskModule } from 'primeng/inputmask';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';
import {
  ContaService,
  TransacaoDTO,
} from '../../shared/services/conta.service';
import { LoginService } from '../../shared/services/login.service';

@Component({
  selector: 'app-deposito',
  standalone: true,
  imports: [
    InputNumberModule,
    ButtonModule,
    CardModule,
    InputMaskModule,
    DialogModule,
    FormsModule,
    CurrencyPipe,
  ],
  templateUrl: './deposito.component.html',
  styleUrl: './deposito.component.scss',
})
export class DepositoComponent {
  visible = false;
  valorDeposito: number | undefined;

  contaService = inject(ContaService);

  loginService = inject(LoginService);

  constructor() {}

  abrirConfirmacao() {
    this.visible = true;
  }

  depositar() {
    if (this.valorDeposito !== undefined && this.valorDeposito > 0) {
      var command: TransacaoDTO = {
        idCliente: parseFloat(this.loginService.usuarioLogado.clienteId),
        tipoTransacao: 1,
        valorTransacao: this.valorDeposito,
        data: new Date().toISOString(),
      };
      console.log(command);
      this.contaService.depositar(command).subscribe({
        next: () => {},
      });
    } else {
      console.error('O valor de depósito não é válido.');
    }
  }
}
