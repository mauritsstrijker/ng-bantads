import { Component, inject, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { GerenteService } from '../../shared/services/gerente.service';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { InputMaskModule } from 'primeng/inputmask';
import { timer } from 'rxjs';

@Component({
  selector: 'app-area-gerencia',
  standalone: true,
  imports: [
    InputTextModule,
    TableModule,
    ButtonModule,
    DialogModule,
    DropdownModule,
    FormsModule,
    InputMaskModule,
  ],
  templateUrl: './area-gerencia.component.html',
  styleUrl: './area-gerencia.component.scss',
})
export class AreaGerenciaComponent implements OnInit {
  gerenteService = inject(GerenteService);
  cargoSelecionado: string;
  criarVisible: boolean = false;

  criarOuEditarGerente: GerenteDTO = {
    nome: '',
    cpf: '',
    telefone: '',
    cargo: '',
    email: '',
  };

  cargos = [
    { name: 'ADMIN', code: 'NY' },
    { name: 'GERENTE', code: 'RM' },
  ];

  showDialog() {
    this.criarVisible = true;
  }

  ngOnInit(): void {
    this.gerenteService.buscarTodosGerentes().subscribe({
      next: (response) => {
        this.gerentes = response;
      },
    });
  }

  deletarGerente(id: string) {
    this.gerenteService.deletarGerente(id).subscribe({
      next: () => {},
      error: () => {
        timer(2000).subscribe(() => {
          this.gerenteService.buscarTodosGerentes().subscribe({
            next: (response) => {
              this.gerentes = response;
            },
          });
        });
      },
    });
  }
  gerentes: any[];

  cadastrarGerente() {
    var command = this.criarOuEditarGerente;
    command.cpf = command.cpf.replace(/[^\d]/g, '');
    this.gerenteService.cadastrarGerente(command).subscribe({
      next: () => {},
      error: () => {},
    });
  }
}

export interface GerenteDTO {
  id?: string;
  nome: string;
  email: string;
  cpf: string;
  telefone: string;
  cargo: string;
}
