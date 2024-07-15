import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CalendarModule } from 'primeng/calendar';

@Component({
  selector: 'app-consultar-melhores-clientes',
  standalone: true,
  imports: [ButtonModule, CardModule, CalendarModule],
  templateUrl: './consultar-melhores-clientes.component.html',
  styleUrls: ['./consultar-melhores-clientes.component.scss'],
})
export class ConsultarMelhoresClientesComponent {}
