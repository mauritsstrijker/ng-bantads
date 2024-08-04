import { Endereco } from './endereco.model';

export enum Perfil {
  CLIENTE = 'CLIENTE',
  GERENTE = 'GERENTE',
  ADMIN = 'ADMIN',
}

export class Usuario {
  constructor(
    public userId?: string,
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
