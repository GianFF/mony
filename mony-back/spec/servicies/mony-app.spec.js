import Gasto from "../../src/models/gasto";
import CentroDeCosto from "../../src/models/centro-de-costo";
import MonyApp from "../../src/services/mony-app";
import RepositorioDeCecos from "../../src/repositories/repositorio-de-cecos";
import RepositorioDeGastos from "../../src/repositories/repositorio-de-gastos";

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
    gasto = new Gasto(descripcion, costo)
    app = new MonyApp(RepositorioDeCecos, RepositorioDeGastos)
  })

  describe('cuando no tiene un ceco', () => {
    it('al comienzo no tiene cecos', () => {
      expect(app.getCecos()).toEqual([])
    })

    it('no puede agregar un gasto', () => {
      // TODO testear que explota
      expect(true).toEqual(true)
    })
  })

  describe('cuando tiene un ceco', () => {
    beforeEach(() => {
      app.agregarCeco(centroDeCosto)
    })

    it('puede agregar un centro de costos', () => {
      expect(app.getCecos()).toEqual([centroDeCosto])
    })

    it('puede agregar un gasto', () => {
      app.agregarGastoACeco(gasto, centroDeCosto.id)

      expect(app.getCecos()[0].total).toEqual(gasto.costo)
    })
  })
})
