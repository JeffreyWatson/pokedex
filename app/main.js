import { PokedexsController } from "./Controllers/PokedexsController.js";
import { SandboxsController } from "./Controllers/SandboxsController.js";
// import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  // valuesController = new ValuesController();
  pokedexsController = new PokedexsController();
  sandboxsController = new SandboxsController();
}

window["app"] = new App();
