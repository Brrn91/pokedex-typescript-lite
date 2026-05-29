import { CatalogoPokemon } from "../services/BoxService.js";
import { buscarPokemon } from "../services/PokeApiService.js";
import { formatarTitulo } from "../utils/textFormatters.js";

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
}
