import { Component } from '@angular/core';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputMaskModule } from 'primeng/inputmask';

@Component({
  selector: 'app-consultar-cliente',
  standalone: true,
  imports: [InputNumberModule, ButtonModule, CardModule, InputMaskModule],
  templateUrl: './consultar-cliente.component.html',
  styleUrl: './consultar-cliente.component.scss',
})
export class ConsultarClienteComponent {}
