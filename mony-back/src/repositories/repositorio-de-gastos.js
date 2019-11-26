let id = 0
let gastos = []
const RepositorioDeGastos = {
  getGastos: () => {
    return gastos
  },
  buscarGastoPorId: (gastoId) => {
    return gastos.find(gasto => {
      return gastoId === gasto.id
    })
  },
  agregarGasto: (gasto) => {
    id++
    gasto.id = id
    gastos.push(gasto)
  }
}

export default RepositorioDeGastos
