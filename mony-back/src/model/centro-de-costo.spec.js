import Gasto from "./gasto";
import CentroDeCosto from "./centro-de-costo";

describe('Un Centro de Costo', () => {
  let descripcion
  let costo
  let centroDeCostoParaElAuto
  let gasto

  beforeEach(() => {
    descripcion = 'Descripcion'
    costo = 10
    centroDeCostoParaElAuto = new CentroDeCosto('Auto')
    gasto = new Gasto(centroDeCostoParaElAuto, descripcion, costo)
  })

  it('tiene un titulo', () => {
    expect(centroDeCostoParaElAuto.titulo).toEqual('Auto')
  })

  it('puede tener un centro de costo padre', () => {
    const padre = new CentroDeCosto('Gastos')
    
    centroDeCostoParaElAuto.setPadre(padre)
    
    expect(centroDeCostoParaElAuto.padre).toEqual(padre)
  })

  it('puede tener un centro de costo hijo', () => {
    const hijo = new CentroDeCosto('Nafta')
    
    centroDeCostoParaElAuto.setHijo(hijo)
    
    expect(centroDeCostoParaElAuto.hijo).toEqual(hijo)
  })

  describe('Agrupa gastos', () => {
    it('cuando se crea no tiene ninguno', () => {
      expect(centroDeCostoParaElAuto.gastos).toEqual([])
    })
    
    it('se le puede agregar un nuevo gasto', () => {
      centroDeCostoParaElAuto.agregarGasto(gasto)

      expect(centroDeCostoParaElAuto.gastos).toEqual([gasto])
    })
  })

  describe('Totaliza gastos', () => {
    it('cuando no tiene gastos el total es 0', () => {
      expect(centroDeCostoParaElAuto.total).toEqual(0)
    })

    it('cuando tiene gastos el total es el costo del gasto', () => {
      centroDeCostoParaElAuto.agregarGasto(gasto)

      expect(centroDeCostoParaElAuto.total).toEqual(gasto.costo)
    })
  })
})
