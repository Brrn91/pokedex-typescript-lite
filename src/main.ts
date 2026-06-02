import { CatalogoPokemon } from "./services/BoxService.js";
import { TerminalController } from "./controllers/TerminalController.js";

const catalogo = new CatalogoPokemon();
const controller = new TerminalController(catalogo);

await controller.iniciarMenu();
