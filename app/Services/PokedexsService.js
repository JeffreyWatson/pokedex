import { ProxyState } from "../AppState.js";
import { Pokedex } from "../Models/Pokedex.js";


const pokeApi = axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokemon",
  setTimeout: 8000
})


class PokedexsService {
  async getPokeApi() {
    const res = await pokeApi.get()
    console.log("getPokeApi", res.data);
    ProxyState.pokedex = res.data.results.map(p => p)
  }

  async getPokeDetails(name) {
    const res = await pokeApi.get(name)
    console.log('poke-details', res.data);
    ProxyState.activePokemon = new Pokedex(res.data)
  }
}







export const pokedexsService = new PokedexsService()