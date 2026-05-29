import { PokemonResumo } from "../models/Pokemon.js";

export function formatarPokemon(pokemon: PokemonResumo): string {
  return `#${pokemon.id} - ${pokemon.nome} | Tipos: ${pokemon.tipos.join(", ")} | Altura: ${pokemon.altura} | Peso: ${pokemon.peso}`;
}

export function formatarTitulo(texto: string): string {
  return `\n=== ${texto} ===`;
}
