import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';


@Component({
  selector: 'app-tela-inicial-cliente',
  standalone: true,
  imports: [ButtonModule, TableModule],
  templateUrl: './tela-inicial-cliente.component.html',
  styleUrl: './tela-inicial-cliente.component.scss',
})
export class TelaInicialClienteComponent{

}
