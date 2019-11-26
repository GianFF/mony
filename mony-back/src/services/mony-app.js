import CentroDeCosto from "../models/centro-de-costo"
import Gasto from "../models/gasto";

class MonyApp {
  constructor(repoDeCecos, repoDeGastos) {
    this.repoDeCecos = repoDeCecos
    this.repoDeGastos = repoDeGastos
  }

  getCecos() {
    return this.repoDeCecos.getCecos()
  }

  getGastos() {
    return this.repoDeGastos.getGastos()
  }

  agregarGastoACeco(gasto, cecoId) {
    const unGasto = new Gasto(gasto.descripcion, gasto.costo)
    this.agregarGasto(unGasto)
    const cecoBuscado = this.repoDeCecos.buscarCecoPorId(cecoId)
    cecoBuscado.agregarGasto(unGasto)
  }

  agregarGasto(gasto) {
    this.repoDeGastos.agregarGasto(gasto)
  }

  agregarCeco(ceco) {
    this.repoDeCecos.agregarCeco(new CentroDeCosto(ceco.titulo))
  }
}

export default MonyApp
