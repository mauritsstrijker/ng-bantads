import { Component } from '@angular/core';

@Component({
  selector: 'remocao-gerente',
  templateUrl: './remocao-gerente.component.html',
  styleUrls: ['./remocao-gerente.component.scss'],
})
export class RemoverGerenteComponent {
  gerentes: any[] = [
    { nome: 'Gerente 1' },
    { nome: 'Gerente 2' },
    { nome: 'Gerente 3' },
  ];

  removerGerente(gerente: any): void {
    const index = this.gerentes.indexOf(gerente);
    if (index !== -1) {
      this.gerentes.splice(index, 1);
    }
  }
}
