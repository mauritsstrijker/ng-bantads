import { Component } from '@angular/core';
import { CheckboxModule } from 'primeng/checkbox';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MessagesModule } from 'primeng/messages';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputMaskModule } from 'primeng/inputmask';
import { ViaCepService } from '../../shared/services/viacep.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ListboxModule } from 'primeng/listbox';

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
    InputNumberModule,
    InputMaskModule,
    ReactiveFormsModule,
    ListboxModule,
  ],
  templateUrl: './auto-cadastro.component.html',
  styleUrl: './auto-cadastro.component.scss',
})
export class AutoCadastroComponent {
  constructor(private viacepService: ViaCepService) {}
  showSuccessMessage = false;

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
  novoUsuarioForm!: FormGroup;

  ngOnInit(): void {
    this.novoUsuarioForm = new FormGroup({
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

  buscaEndereco() {
    this.viacepService
      .getAddress(this.novoUsuarioForm.get('cep')?.value)
      .subscribe((address) => {
        this.rua?.setValue(address.logradouro);
        this.bairro?.setValue(address.bairro);
        this.estado?.setValue(address.uf);
        this.cidade?.setValue(address.localidade);
      });
  }

  limparForm() {
    this.novoUsuarioForm.reset({});
  }

  onSubmit() {
    if (this.novoUsuarioForm.invalid) return;
    this.novoUsuarioForm.reset({});
  }

  onTipoLogradouroChange(event: any) {
    this.novoUsuarioForm.get('tipoLogradouro').setValue(event.value);
  }

  get cpf() {
    return this.novoUsuarioForm.get('cpf');
  }

  get nome() {
    return this.novoUsuarioForm.get('nome');
  }

  get email() {
    return this.novoUsuarioForm.get('email');
  }

  get telefone() {
    return this.novoUsuarioForm.get('telefone');
  }

  get cep() {
    return this.novoUsuarioForm.get('cep');
  }

  get numero() {
    return this.novoUsuarioForm.get('numero');
  }

  get rua() {
    return this.novoUsuarioForm.get('rua');
  }

  get estado() {
    return this.novoUsuarioForm.get('estado');
  }

  get cidade() {
    return this.novoUsuarioForm.get('cidade');
  }

  get bairro() {
    return this.novoUsuarioForm.get('bairro');
  }

  get tipoLogradouro() {
    return this.novoUsuarioForm.get('tipoLogradouro');
  }
}
