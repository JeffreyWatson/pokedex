

export class Pokedex {
  constructor(data) {
    this.name = data.name
    this.id = data.id
    this.img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon.png`
  }

  static ListTemplate(pokemon) {
    return `
    <b class="selectable d-flex text-center text-uppercase text-warning" onclick="app.pokedexsController.getPokeDetails('${pokemon.name}')"> ${pokemon.name} </b>
    `
  }

  get DetailsTemplate() {
    return `
    <div class="col-12 d-flex text-center justify-content-center p-3">
    <h4 class="text-uppercase">${this.name}</h4>
    </div>
    <div class="col-12">
      <h6>ID: ${this.id}</h6>
    </div>
    <div class="col-6 d-flex text-center text-wrap">${this.img}</div>
    `
  }

  get SandBoxTemplate() {
    return `
    <div class="col-12">
    <div class="row">
      <div class="col-2">${this.name}</div>
      <div class="col-2 selectable text-danger"><i class="mdi mdi-close"></i></div>
    </div>
  </div>
    `
  }
}