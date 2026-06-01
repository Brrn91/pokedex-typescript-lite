import { CatalogoPokemon } from "./services/BoxService.js";
import { TerminalController } from "./controllers/TerminalController.js";

const catalogo = new CatalogoPokemon();
const controller = new TerminalController(catalogo);

await controller.buscarEAdicionar("pikachu");
await controller.buscarEAdicionar("charmander");
await controller.buscarEAdicionar("pikachu");
await controller.buscarEAdicionar("pokemon-inexistente");

controller.listarCatalogo();
controller.removerDoCatalogo(25);
controller.listarCatalogo();

await controller.buscarEAdicionar("charizard");
controller.filtrarPorTipo("fire");
controller.filtrarPorTipo("water");
