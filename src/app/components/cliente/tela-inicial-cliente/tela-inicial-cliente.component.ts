import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ContaService } from '../../shared/services/conta.service';

@Component({
  selector: 'app-tela-inicial-cliente',
  standalone: true,
  imports: [ButtonModule, TableModule, CommonModule],
  templateUrl: './tela-inicial-cliente.component.html',
  styleUrl: './tela-inicial-cliente.component.scss',
})
export class TelaInicialClienteComponent implements OnInit {
  contaService = inject(ContaService);
  constructor(private router: Router) {}
  ngOnInit(): void {
    this.contaService.buscarSaldo().subscribe({
      next: (response) => {
        this.saldo = response;
      },
    });
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }

  saldo: number;
  cliente: any = {
    cpf: '123-456-789-10',
    nome: 'João Carlos da Silva',
    conta: 1234,
    saldo: 5432.98,
  };
}
