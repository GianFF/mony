import Gasto from "./gasto";
import CentroDeCosto from "./centro-de-costo";
import MonyApp from "./mony-app";

describe('MonyApp', () => {
  let descripcion
  let costo
  let centroDeCosto
  let gasto
  let app

  beforeEach(() => {
    descripcion = 'Descripcion'
    costo = 10
    centroDeCosto = new CentroDeCosto('Auto')
    centroDeCosto.id = 1
    gasto = new Gasto(centroDeCosto, descripcion, costo)
    app = new MonyApp()
  })

  it('al comienzo no tiene cecos', () => {
    expect(app.getCecos()).toEqual([])
  })

  it('puede agregar un centro de costos', () => {
    app.agregarCeco(centroDeCosto)

    expect(app.getCecos()).toEqual([centroDeCosto])
  })

  it('puede agregar un gasto', () => {
    app.agregarCeco(centroDeCosto)

    app.agregarGasto(gasto, centroDeCosto.id)
    
    centroDeCosto.agregarGasto(gasto)
    const expected = [centroDeCosto]
    expect(app.getCecos()).toEqual(expected)
  })

  it('no puede agregar un gasto si no hay centro de costos', () => {
    // TODO testear que explota
    expect(true).toEqual(true)
  })
})
