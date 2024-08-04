export class Endereco {
  constructor(
    public cep?: string,
    public logradouro?: string,
    public numero?: string,
    public uf?: string,
    public complemento?: string,
    public cidade?: string
  ) {}
}
