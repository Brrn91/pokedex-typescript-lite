import { CatalogoPokemon } from "./services/BoxService.js";
import { TerminalController } from "./controllers/TerminalController.js";

const catalogo = new CatalogoPokemon();
const controller = new TerminalController(catalogo);

await controller.carregarCatalogo();

await controller.buscarEAdicionar("pikachu");
await controller.buscarEAdicionar("charmander");
await controller.buscarEAdicionar("pikachu");
await controller.buscarEAdicionar("pokemon-inexistente");
await controller.buscarEAdicionar("charizard");

controller.listarCatalogo();
controller.filtrarPorTipo("fire");
controller.filtrarPorTipo("water");

controller.removerDoCatalogo(25);
controller.listarCatalogo();

await controller.salvarCatalogo();
