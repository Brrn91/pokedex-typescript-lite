import { PokemonResumo } from "../models/Pokemon.js";
import { formatarPokemon } from "../utils/textFormatters.js";
import { readFile, writeFile } from "fs/promises";

const CAMINHO_BOX = "./pc_box.json";

export class CatalogoPokemon {
  private pokemons: PokemonResumo[] = [];

  adicionar(pokemon: PokemonResumo): void {
    const jaExiste = this.pokemons.some((p) => p.id === pokemon.id);

    if (jaExiste) {
      console.log(`[AVISO] ${pokemon.nome} já está no catálogo.`);
      return;
    }

    this.pokemons.push(pokemon);
    console.log(`[OK] ${pokemon.nome} adicionado ao catálogo.`);
  }

  listar(): void {
    if (this.pokemons.length === 0) {
      console.log("[AVISO] Catálogo vazio.");
      return;
    }

    this.pokemons.forEach((pokemon) => {
      console.log(formatarPokemon(pokemon));
    });
  }

  remover(id: number): void {
    const existe = this.pokemons.some((pokemon) => pokemon.id === id);

    if (!existe) {
      console.log("[AVISO] Nenhum Pokémon encontrado com esse ID.");
      return;
    }

    this.pokemons = this.pokemons.filter((pokemon) => pokemon.id !== id);
    console.log("[OK] Pokémon removido do catálogo.");
  }

  filtrarPorTipo(tipo: string): PokemonResumo[] {
    return this.pokemons.filter((pokemon) =>
      pokemon.tipos.some((t) => t.toLowerCase() === tipo.toLowerCase()),
    );
  }

  async carregarDoArquivo(): Promise<void> {
    try {
      const conteudo = await readFile(CAMINHO_BOX, "utf-8");
      this.pokemons = JSON.parse(conteudo) as PokemonResumo[];
      console.log("[OK] Catálogo carregado do arquivo.");
    } catch {
      console.log("[INFO] Nenhum catálogo salvo encontrado. Iniciando vazio.");
      this.pokemons = [];
    }
  }

  async salvarNoArquivo(): Promise<void> {
    try {
      await writeFile(CAMINHO_BOX, JSON.stringify(this.pokemons, null, 2));
      console.log("[OK] Catálogo salvo no arquivo.");
    } catch {
      console.log("[ERRO] Não foi possível salvar o catálogo.");
    }
  }
}
