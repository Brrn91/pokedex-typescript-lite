import { buscarPokemon } from "./services/PokeApiService.js";

const pokemon = await buscarPokemon("pokemon-inexistente")
console.log(pokemon)
