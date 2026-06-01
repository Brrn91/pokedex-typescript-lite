import { CatalogoPokemon } from "../services/BoxService.js";
import { buscarPokemon } from "../services/PokeApiService.js";
import { formatarTitulo, formatarPokemon } from "../utils/textFormatters.js";

export class TerminalController {
  private catalogo: CatalogoPokemon;

  constructor(catalogo: CatalogoPokemon) {
    this.catalogo = catalogo;
  }

  async buscarEAdicionar(nomeOuId: string): Promise<void> {
    const pokemon = await buscarPokemon(nomeOuId);
    if (pokemon !== null) {
      this.catalogo.adicionar(pokemon);
    }
  }

  listarCatalogo(): void {
    console.log(formatarTitulo("Catálogo de Pokémon"));
    this.catalogo.listar();
  }

  removerDoCatalogo(id: number): void {
    this.catalogo.remover(id);
  }

  filtrarPorTipo(tipo: string): void {
    const resultado = this.catalogo.filtrarPorTipo(tipo);

    if (resultado.length === 0) {
      console.log(`[AVISO] Nenhum Pokémon do tipo "${tipo}" encontrado.`);
      return;
    }

    console.log(formatarTitulo(`Pokémon do tipo "${tipo}"`));
    resultado.forEach((pokemon) => console.log(formatarPokemon(pokemon)));
  }

  async carregarCatalogo(): Promise<void> {
    await this.catalogo.carregarDoArquivo();
  }

  async salvarCatalogo(): Promise<void> {
    await this.catalogo.salvarNoArquivo();
  }
}
