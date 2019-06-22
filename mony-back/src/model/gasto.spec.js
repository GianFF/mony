import Gasto from "./gasto";
import CentroDeCosto from "./centro-de-costo";

describe('Un Gasto', () => {
  let descripcion
  let costo
  let centroDeCosto
  let gasto

  beforeEach(() => {
    descripcion = 'Descripcion'
    costo = 10
    centroDeCosto = new CentroDeCosto()
    gasto = new Gasto(centroDeCosto, descripcion, costo)
  })

  it('tiene costo y descripcion', () => {
    expect(gasto.descripcion).toEqual(descripcion)
    expect(gasto.costo).toEqual(costo)
  })

  it('tiene un centro de costo', () => {
    expect(gasto.centroDeCosto).toEqual(centroDeCosto)
  })
})
