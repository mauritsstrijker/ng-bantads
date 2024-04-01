import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';


@Component({
  selector: 'app-tela-inicial-cliente',
  standalone: true,
  imports: [ButtonModule, TableModule, CommonModule],
  templateUrl: './tela-inicial-cliente.component.html',
  styleUrl: './tela-inicial-cliente.component.scss',
})
export class TelaInicialClienteComponent{
  constructor(
    private router: Router,
  ) {}

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }

  cliente: any={cpf: '123-456-789-10', nome: 'João Carlos da Silva', conta: 1234, saldo: 5432.98 };
}
