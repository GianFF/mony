import request from 'supertest'
import app from '../server'

describe('API', () => {

  describe('get /api', () => {
    it('devuelve estado OK', () => { 
      return request(app)
        .get('/api/')
        .expect(200, { status: 'ok' })
    })  
  })

  describe(`post /api/ceco/{ceco: {titulo: 'Auto'}}`, () => {

    it('retorna ok', () => {
      
      return request(app)
        .post('/api/ceco')
        .send({ceco: {titulo: 'Auto'}})
        .expect(200, { status: 'ok' })
    })
  })

  describe(`get /api/cecos`, () => {

    it('retorna los cecos', () => {
      request(app)
        .post('/api/ceco')
        .send({ceco: {titulo: 'Auto'}})
        .expect(200, { status: 'ok' })

      return request(app)
        .get('/api/cecos')
        .expect(200,{ status: 'ok', cecos: [ { titulo: 'Auto', gastos: [], total: 0, id: 1 } ] })
    })
  })
  
  describe('post /api/gasto/{ceco: 1, gasto: 10}', () => {

    it('retorna ok', () => {

      return request(app)
        .post('/api/gasto')
        .send({ceco: 1, gasto: 10})
        .expect(200, { status: 'ok' })
    })
  })
})
