export class APIError extends Error {
  constructor(mensagem: string) {
    super(mensagem);
    this.name = "APIError";
  }
}

export class CatalogoError extends Error {
  constructor(mensagem: string) {
    super(mensagem);
    this.name = "CatalogoError";
  }
}
