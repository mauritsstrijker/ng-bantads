export class Endereco {
  constructor(
    public cep?: string,
    public rua?: string,
    public numero?: string,
    public estado?: string,
    public complemento?: string,
    public cidade?: string
  ) {}
}
