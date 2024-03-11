import { Component } from '@angular/core';
import { CheckboxModule } from 'primeng/checkbox';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MessagesModule } from 'primeng/messages';

@Component({
  selector: 'app-auto-cadastro',
  standalone: true,
  imports: [
    CheckboxModule,
    CommonModule,
    DropdownModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    MessagesModule,
  ],
  templateUrl: './auto-cadastro.component.html',
  styleUrl: './auto-cadastro.component.scss',
})
export class AutoCadastroComponent {
  showSuccessMessage = false;
}
