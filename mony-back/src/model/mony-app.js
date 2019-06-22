import CentroDeCosto from "./centro-de-costo"
import RepositorioDeCecos from "./repositorio-de-cecos"

class MonyApp {
  constructor() {
    this.repoDeCecos = new RepositorioDeCecos()
  }

  getCecos() {
    return this.repoDeCecos.getCecos()
  }

  agregarGasto(gasto, cecoId) {
    const cecoBuscado = this.repoDeCecos.buscarCecoPorId(cecoId)
    cecoBuscado.agregarGasto(gasto)
  }

  agregarCeco(ceco) {
    this.repoDeCecos.agregarCeco(new CentroDeCosto(ceco.titulo)) 
  }
}

export default MonyApp