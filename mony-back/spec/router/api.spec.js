import request from 'supertest'
import app from '../../src/server'

describe('API', () => {

  describe('get /api', () => {
    it('devuelve estado OK', () => {
      return request(app)
        .get('/api/')
        .expect(200, {status: 'ok'})
    })
  })

  describe(`post /api/ceco con {ceco: {titulo: 'Auto'}}`, () => {
    it('devuelve estado OK', () => {

      return request(app)
        .post('/api/ceco')
        .send({ceco: {titulo: 'Auto'}})
        .expect(200, {status: 'ok'})
    })
  })

  describe(`get /api/cecos`, () => {
    it('devuelve estado OK y retorna los cecos', () => {
      request(app)
        .post('/api/ceco')
        .send({ceco: {titulo: 'Auto'}})
        .expect(200, {status: 'ok'})

      return request(app)
        .get('/api/cecos')
        .expect(200, {status: 'ok', cecos: [{titulo: 'Auto', gastos: [], total: 0, id: 1}]})
    })
  })

  describe('post /api/gasto con {ceco: 1, gasto: 10}', () => {
    it('devuelve estado OK', () => {

      return request(app)
        .post('/api/gasto')
        .send({cecoId: 1, gasto: {descripcion: 'Nafta', costo: 5}})
        .expect(200, {status: 'ok'})
    })
  })

  describe('get /api/gastos', () => {
    it('devuelve estado OK y los gastos', () => {
      request(app)
        .post('/api/gasto')
        .send({cecoId: 1, gasto: {descripcion: 'Seguro', costo: 10}})
        .then(() => {
          request(app)
            .post('/api/gasto')
            .send({cecoId: 1, gasto: {descripcion: 'Nafta', costo: 5}})
        })

      return request(app)
        .get('/api/gastos')
        .expect(200, {status: 'ok', gastos: [
          {descripcion: 'Nafta', costo: 5, id: 1},
          {descripcion: 'Seguro', costo: 10, id: 2}
        ]})
    })
  })
})
