import { Component } from '@angular/core';
import { CheckboxModule } from 'primeng/checkbox';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MessagesModule } from 'primeng/messages';
import { ButtonGroupModule } from 'primeng/buttongroup';
import { Location } from '@angular/common';
import { InputMaskModule } from 'primeng/inputmask';


@Component({
  selector: 'app-alteracao-perfil',
  standalone: true,
  imports: [ 
    CheckboxModule,
    CommonModule,
    DropdownModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    MessagesModule,
    ButtonGroupModule,
    InputMaskModule,
  ],
  templateUrl: './alteracao-perfil.component.html',
  styleUrl: './alteracao-perfil.component.scss'
})
export class AlteracaoPerfilComponent {
  constructor(private location: Location) {}

  showSuccessMessage = false;

  valuecpf = 'xxx.xxx.xxx-xx';

  goBack() {
    this.location.back();
  }
}
