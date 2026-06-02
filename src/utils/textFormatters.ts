import { PokemonResumo } from "../models/Pokemon.js";

export function formatarPokemon(pokemon: PokemonResumo): string {
  return `#${pokemon.id} - ${pokemon.nome} | Tipos: ${pokemon.tipos.join(", ")} | Altura: ${pokemon.altura} | Peso: ${pokemon.peso} | HP: ${pokemon.hp} | Ataque: ${pokemon.ataque} | Defesa: ${pokemon.defesa}`;
}

export function formatarTitulo(texto: string): string {
  return `\n=== ${texto} ===`;
}

import { createInterface } from "readline";

export function pergunta(texto: string): Promise<string> {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question(texto, (resposta) => {
      rl.close();
      resolve(resposta.trim());
    });
  });
}
