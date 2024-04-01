import { Component } from '@angular/core';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-deposito',
  standalone: true,
  imports: [InputNumberModule, ButtonModule, CardModule],
  templateUrl: './deposito.component.html',
  styleUrl: './deposito.component.scss',
})
export class DepositoComponent {}
