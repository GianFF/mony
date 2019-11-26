import Gasto from "../../src/models/gasto";

describe('Un Gasto', () => {
  let descripcion
  let costo
  let gasto

  beforeEach(() => {
    descripcion = 'Descripcion'
    costo = 10
    gasto = new Gasto(descripcion, costo)
  })

  it('tiene costo y descripcion', () => {
    expect(gasto.descripcion).toEqual(descripcion)
    expect(gasto.costo).toEqual(costo)
  })
})
