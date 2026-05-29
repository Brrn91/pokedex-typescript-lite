import { PokemonApiResponse, PokemonResumo } from "../models/Pokemon.js";
const BASE_URL = "https://pokeapi.co/api/v2/pokemon";

export async function buscarPokemon(
  nomeOuId: string,
): Promise<PokemonResumo | null> {
  try {
    const resposta = await fetch(`${BASE_URL}/${nomeOuId}`);

    if (!resposta.ok) {
      console.log(`[ERRO] Pokémon não encontrado: ${nomeOuId}`);
      return null;
    }

    const dados = (await resposta.json()) as PokemonApiResponse;

    const pokemonResumo: PokemonResumo = {
      id: dados.id,
      nome: dados.name,
      tipos: dados.types.map((item) => item.type.name),
      altura: dados.height,
      peso: dados.weight,
    };

    return pokemonResumo;
  } catch (erro) {
    console.log(`[ERRO] Não foi possível buscar o Pokémon: ${nomeOuId}`);
    return null;
  }
}
