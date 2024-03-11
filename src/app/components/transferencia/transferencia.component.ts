import { Component } from '@angular/core';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputMaskModule } from 'primeng/inputmask';

@Component({
  selector: 'app-transferencia',
  standalone: true,
  imports: [InputNumberModule, ButtonModule, CardModule, InputMaskModule],
  templateUrl: './transferencia.component.html',
  styleUrl: './transferencia.component.scss',
})
export class TransferenciaComponent {}
