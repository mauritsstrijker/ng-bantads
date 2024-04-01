import { Component } from '@angular/core';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputText, InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-saque',
  standalone: true,
  imports: [InputNumberModule, ButtonModule, CardModule, InputTextModule],
  templateUrl: './saque.component.html',
  styleUrl: './saque.component.scss',
})
export class SaqueComponent {}
