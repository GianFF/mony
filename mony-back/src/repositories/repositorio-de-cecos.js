let id = 0
let cecos = []
const RepositorioDeCecos = {
  getCecos: () => {
    return cecos
  },
  buscarCecoPorId: (cecoId) => {
    return cecos.find(centroDeCosto => {
      return cecoId === centroDeCosto.id
    })
  },
  agregarCeco: (ceco) => {
    id++
    ceco.id = id
    cecos.push(ceco)
  }
}

export default RepositorioDeCecos
