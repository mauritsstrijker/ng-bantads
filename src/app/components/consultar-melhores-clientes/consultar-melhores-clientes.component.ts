import { Component } from '@angular/core';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputMaskModule } from 'primeng/inputmask';
import { CalendarModule } from 'primeng/calendar';

@Component({
  selector: 'app-consultar-melhores-clientes',
  standalone: true,
  imports: [
    InputNumberModule,
    ButtonModule,
    CardModule,
    InputMaskModule,
    CalendarModule,
  ],
  templateUrl: './consultar-melhores-clientes.component.html',
  styleUrl: './consultar-melhores-clientes.component.scss',
})
export class ConsultarMelhoresClientesComponent {}
