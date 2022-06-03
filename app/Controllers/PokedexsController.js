import { ProxyState } from "../AppState.js";
import { Pokedex } from "../Models/Pokedex.js";
import { pokedexsService } from "../Services/PokedexsService.js";
import { Pop } from "../Utils/Pop.js";

function _draw() {
  let pokemon = ProxyState.pokedex
  let template = ''
  pokemon.forEach(p => template += Pokedex.ListTemplate(p))
  document.getElementById('pokemon').innerHTML = template
}

function _drawPokeDetails() {
  let poke = ProxyState.activePokemon
  document.getElementById('poke-details').innerHTML = poke.DetailsTemplate
}

export class PokedexsController {
  constructor() {
    console.log('load pokedex', ProxyState.pokedex);
    ProxyState.on('pokedex', _draw)
    ProxyState.on('activePokemon', _drawPokeDetails)
    _draw()
    this.getPokeApi()
  }

  async getPokeApi() {
    try {
      await pokedexsService.getPokeApi()
    } catch (error) {
      console.error(error)
      Pop.toast(error.message, 'error')
    }
  }

  async getPokeDetails(name) {
    try {
      await pokedexsService.getPokeDetails(name)
    } catch (error) {
      console.error(error)
      Pop.toast(error.message, 'error')
    }
  }
}