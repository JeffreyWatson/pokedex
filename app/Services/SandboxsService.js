import { ProxyState } from "../AppState.js";
import { Pokedex } from "../Models/Pokedex.js";


const sandboxApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/jefe/pokemon",
  setTimeout: 10000
})


class SandboxsService {
  async getSandboxPokemon() {
    const res = await sandboxApi.get()
    console.log('getSandboxPokemon', res.data);
    ProxyState.sandboxPokemon = res.data.map(p => new Pokedex(p))
  }


}


export const sandboxsService = new SandboxsService()