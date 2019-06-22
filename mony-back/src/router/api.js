import { Router } from 'express'
import MonyApp from '../model/mony-app'

const router = Router()

const app = new MonyApp()

router.get('/', (req, res) => { 
  res.json({ status: "ok" }) 
})

router.post('/gasto', (req, res) => {
  app.agregarGasto(req.body.gasto, req.body.cecoId)
  
  res.json({ status: "ok" }) 
})

router.post('/ceco', (req, res) => {
  app.agregarCeco(req.body.ceco)

  res.json({ status: "ok" }) 
})

router.get('/cecos', (req, res) => {
  const cecos = app.getCecos()

  res.json({ status: "ok", cecos }) 
})

export default router
