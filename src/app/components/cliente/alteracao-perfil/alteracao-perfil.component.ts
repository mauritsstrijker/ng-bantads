import { Component, inject } from '@angular/core';
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
import {
  AutoCadastroCommand,
  ClienteService,
} from '../../shared/services/cliente.service';
import { ViaCepService } from '../../shared/services/viacep.service';
import { LoginService } from '../../shared/services/login.service';

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
  constructor(
    private location: Location,
    private viacepService: ViaCepService
  ) {}

  showSuccessMessage = false;

  valuecpf = 'xxx.xxx.xxx-xx';

  endereco = { cep: '', logradouro: '', numero: '' };
  novoUsuario = {
    cpf: '',
    nome: '',
    email: '',
    telefone: '',
    endereco: this.endereco,
    salario: '',
  };

  editarUsuarioForm!: FormGroup;

  ngOnInit(): void {
    this.editarUsuarioForm = new FormGroup({
      nome: new FormControl(this.novoUsuario.nome, [Validators.required]),
      salario: new FormControl(this.novoUsuario.salario, [Validators.required]),
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
    });
  }

  clienteService = inject(ClienteService);

  buscaEndereco() {
    this.viacepService
      .getAddress(this.editarUsuarioForm.get('cep')?.value)
      .subscribe((address) => {
        this.rua?.setValue(address.logradouro);
        this.bairro?.setValue(address.bairro);
        this.estado?.setValue(address.uf);
        this.cidade?.setValue(address.localidade);
      });
  }

  loginService = inject(LoginService);
  onSubmit() {
    console.log('ola');
    console.log(this.editarUsuarioForm);
    if (this.editarUsuarioForm.valid) {
      var command: AutoCadastroCommand = {
        id: this.loginService.usuarioLogado.clienteId,
        nome: this.editarUsuarioForm.get('nome').value,
        email: this.editarUsuarioForm.get('email').value,
        cpf: '',
        endereco: {
          cep: this.editarUsuarioForm.get('cep').value,
          logradouro: this.editarUsuarioForm.get('rua').value,
          numero: this.editarUsuarioForm.get('numero').value,
          uf: this.editarUsuarioForm.get('estado').value,
          cidade: this.editarUsuarioForm.get('cidade').value,
        },
        telefone: this.editarUsuarioForm.get('telefone').value,
        salario: this.editarUsuarioForm.get('salario').value,
      };
      this.clienteService.autoCadastro(command).subscribe({
        next: (response) => {
          this.showSuccessMessage = true;
        },
        error: () => {
          this.showSuccessMessage = true;
        },
      });
    }
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
