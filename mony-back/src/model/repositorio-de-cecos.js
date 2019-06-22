class RepositorioDeCecos {
  constructor() {
    this.id = 0
    this.cecos = []
  }

  getCecos() {
    return this.cecos
  }

  buscarCecoPorId(cecoId) {
    return this.cecos.find(centroDeCosto => {
      return cecoId === centroDeCosto.id
    })
  }

  agregarCeco(ceco) {
    this.id++
    ceco.id = this.id
    this.cecos.push(ceco) 
  }
}

export default RepositorioDeCecos