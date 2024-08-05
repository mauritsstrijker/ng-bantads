import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ButtonGroupModule } from 'primeng/buttongroup';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { GerenteService } from '../../shared/services/gerente.service';

@Component({
  selector: 'app-tela-inicial-administrador',
  standalone: true,
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    ButtonGroupModule,
    InputTextModule,
    PanelModule,
  ],
  templateUrl: './tela-inicial-administrador.component.html',
  styleUrl: './tela-inicial-administrador.component.scss',
})
export class TelaInicialAdministradorComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
    this.gerenteService.buscarTelaInicial().subscribe({
      next: (response) => {
        this.gerentes = response.telaInicio;
      },
    });
  }

  gerenteService = inject(GerenteService);

  gerentes: any[];
}
