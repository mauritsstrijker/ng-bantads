import { Endereco } from './endereco.model';

export enum Perfil {
  CLIENTE = 'cliente',
  GERENTE = 'gerente',
  ADMIN = 'admin',
}

export class Usuario {
  constructor(
    public cpf?: string,
    public nome?: string,
    public email?: string,
    public senha?: string,
    public telefone?: string,
    public salario?: string,
    public endereco?: Endereco,
    public perfil?: Perfil
  ) {}
}
