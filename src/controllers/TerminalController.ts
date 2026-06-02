import { CatalogoPokemon } from "../services/BoxService.js";
import { buscarPokemon } from "../services/PokeApiService.js";
import {
  formatarTitulo,
  formatarPokemon,
  pergunta,
} from "../utils/textFormatters.js";

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

  async iniciarMenu(): Promise<void> {
    await this.carregarCatalogo();

    let rodando = true;

    while (rodando) {
      console.log("\n=== Pokédex TypeScript Lite ===");
      console.log("1. Buscar Pokémon");
      console.log("2. Listar catálogo");
      console.log("3. Filtrar por tipo");
      console.log("4. Remover Pokémon");
      console.log("5. Sair");

      const opcao = await pergunta("\nEscolha uma opção: ");

      switch (opcao) {
        case "1":
          const nome = await pergunta("Digite o nome ou ID do Pokémon: ");
          await this.buscarEAdicionar(nome);
          await this.salvarCatalogo();
          break;

        case "2":
          this.listarCatalogo();
          break;

        case "3":
          const tipo = await pergunta("Digite o tipo (ex: fire, water): ");
          this.filtrarPorTipo(tipo);
          break;

        case "4":
          const idTexto = await pergunta(
            "Digite o ID do Pokémon para remover: ",
          );
          const id = Number(idTexto);
          if (isNaN(id)) {
            console.log("[ERRO] ID inválido. Digite apenas números.");
          } else {
            this.removerDoCatalogo(id);
            await this.salvarCatalogo();
          }
          break;

        case "5":
          console.log("\nAté logo, Treinador! 👋");
          rodando = false;
          break;

        default:
          console.log("[AVISO] Opção inválida. Tente novamente.");
      }
    }
  }
}
