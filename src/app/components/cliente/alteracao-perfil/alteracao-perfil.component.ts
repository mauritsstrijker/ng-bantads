import { Component } from '@angular/core';
import { CheckboxModule } from 'primeng/checkbox';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MessagesModule } from 'primeng/messages';
import { ButtonGroupModule } from 'primeng/buttongroup';
import { Location } from '@angular/common';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { ListboxModule } from 'primeng/listbox';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
    InputNumberModule,
    ListboxModule,
    ReactiveFormsModule,
  ],
  templateUrl: './alteracao-perfil.component.html',
  styleUrl: './alteracao-perfil.component.scss',
})
export class AlteracaoPerfilComponent {
  constructor(private location: Location) {}

  showSuccessMessage = false;

  valuecpf = 'xxx.xxx.xxx-xx';

  tiposLogradouro = [
    'Aeroporto',
    'Alameda',
    'Área',
    'Avenida',
    'Campo',
    'Chácara',
    'Colônia',
    'Condomínio',
    'Conjunto',
    'Distrito',
    'Esplanada',
    'Estação',
    'Estrada',
    'Favela',
    'Fazenda',
    'Feira',
    'Jardim',
    'Ladeira',
    'Lago',
    'Lagoa',
    'Largo',
    'Loteamento',
    'Morro',
    'Núcleo',
    'Parque',
    'Passarela',
    'Pátio',
    'Praça',
    'Quadra',
    'Recanto',
    'Residencial',
    'Rodovia',
    'Rua',
    'Setor',
    'Sítio',
    'Travessa',
    'Trecho',
    'Trevo',
    'Vale',
    'Vereda',
    'Via',
    'Viaduto',
    'Viela',
    'Vila',
  ];

  endereco = { cep: '', rua: '', numero: '', complemento: '' };
  novoUsuario = {
    cpf: '',
    nome: '',
    email: '',
    telefone: '',
    endereco: this.endereco,
  };

  editarUsuarioForm!: FormGroup;

  ngOnInit(): void {
    this.editarUsuarioForm = new FormGroup({
      cpf: new FormControl(this.novoUsuario.cpf, [
        Validators.required,
        // TODO: custom CPF validator
      ]),
      nome: new FormControl(this.novoUsuario.nome, [Validators.required]),
      email: new FormControl(this.novoUsuario.email, [
        Validators.required,
        Validators.email,
      ]),
      telefone: new FormControl(this.novoUsuario.telefone, [
        Validators.required,
      ]),
      cep: new FormControl(this.endereco.cep, [Validators.required]),
      numero: new FormControl(this.endereco.numero, [
        Validators.required,
        Validators.min(1),
      ]),
      rua: new FormControl(this.endereco.numero, [Validators.required]),
      estado: new FormControl(this.endereco.numero, [Validators.required]),
      cidade: new FormControl(this.endereco.numero, [Validators.required]),
      bairro: new FormControl(this.endereco.numero, [Validators.required]),
      tipoLogradouro: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    if (this.editarUsuarioForm.invalid) return;
    this.editarUsuarioForm.reset({});
  }

  onTipoLogradouroChange(event: any) {
    this.editarUsuarioForm.get('tipoLogradouro').setValue(event.value);
  }

  goBack() {
    this.location.back();
  }

  get cpf() {
    return this.editarUsuarioForm.get('cpf');
  }

  get nome() {
    return this.editarUsuarioForm.get('nome');
  }

  get email() {
    return this.editarUsuarioForm.get('email');
  }

  get telefone() {
    return this.editarUsuarioForm.get('telefone');
  }

  get cep() {
    return this.editarUsuarioForm.get('cep');
  }

  get numero() {
    return this.editarUsuarioForm.get('numero');
  }

  get rua() {
    return this.editarUsuarioForm.get('rua');
  }

  get estado() {
    return this.editarUsuarioForm.get('estado');
  }

  get cidade() {
    return this.editarUsuarioForm.get('cidade');
  }

  get bairro() {
    return this.editarUsuarioForm.get('bairro');
  }

  get tipoLogradouro() {
    return this.editarUsuarioForm.get('tipoLogradouro');
  }
}
