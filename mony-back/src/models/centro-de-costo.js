class CentroDeCosto {
  constructor(titulo, padre, hijo){
    this.titulo = titulo
    this.gastos = []
    this.total = 0
    this.padre = padre
    this.hijo = hijo
    this.id = null
  }

  setPadre(padre) {
    this.padre = padre
  }

  setHijo(hijo) {
    this.hijo = hijo
  }

  agregarGasto(gasto) {
    this.gastos.push(gasto)
    this.total = this.total + gasto.costo
  }
}

export default CentroDeCosto