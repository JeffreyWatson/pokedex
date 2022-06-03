import { ProxyState } from "../AppState.js"
import { Pop } from "../Utils/Pop.js"


function _drawSandboxPokemon() {
  let pokemon = ProxyState.sandboxPokemon
  let template = ''
  let pokecount = 0
  pokemon.forEach(p => {
    template += p.SandBoxTemplate
    pokecount++
  })
  document.getElementById('sandbox-pokemon').innerHTML = template
}



export class SandboxsController {
  constructor() {
    ProxyState.on('sandboxPokemon', _drawSandboxPokemon)
    this.getSandboxPokemon()
  }

  async getSandboxPokemon() {
    try {
      await sandboxsService.getSandboxPokemon()
    } catch (error) {
      console.error(error)
      Pop.toast(error.message, 'error')
    }
  }
}