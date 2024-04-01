import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ButtonGroupModule } from 'primeng/buttongroup';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';

@Component({
  selector: 'app-tela-inicial-administrador',
  standalone: true,
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    ButtonGroupModule,
    InputTextModule,
    PanelModule
  ],
  templateUrl: './tela-inicial-administrador.component.html',
  styleUrl: './tela-inicial-administrador.component.scss'
})
export class TelaInicialAdministradorComponent {
  constructor(
  ) {}

  gerentes: any[] = [
    { nome: 'Fulano', qtclientes: '5', saldopositivo:'3', saldonegativo:'2' },
    { nome: 'Ciclano', qtclientes: '6', saldopositivo:'4', saldonegativo:'2' },
    { nome: 'Beltrano', qtclientes: '7', saldopositivo:'4', saldonegativo:'3' },
    { nome: 'Maria', qtclientes: '8', saldopositivo:'5', saldonegativo:'3' },
    { nome: 'João', qtclientes: '9', saldopositivo:'5', saldonegativo:'4' },
    { nome: 'Ana', qtclientes: '10', saldopositivo:'6', saldonegativo:'4' },
    { nome: 'Pedro', qtclientes: '11', saldopositivo:'6', saldonegativo:'5' },
  ];

}
