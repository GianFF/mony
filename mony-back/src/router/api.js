import { Router } from 'express'
import MonyApp from '../services/mony-app'
import RepositorioDeCecos from '../repositories/repositorio-de-cecos'
import RepositorioDeGastos from "../repositories/repositorio-de-gastos";

const router = Router()

const isProduction = process.env.NODE_ENV === 'production'
const repoDeCecos = isProduction ? RepositorioDeCecos : RepositorioDeCecos
const repoDeGastos = isProduction ? RepositorioDeGastos : RepositorioDeGastos
const app = new MonyApp(repoDeCecos, repoDeGastos)

router.get('/', (req, res) => { 
  res.json({ status: "ok" }) 
})

router.get('/gastos', (req, res) => {
  const gastos = app.getGastos()

  res.json({ status: "ok", gastos })
})

router.post('/gasto', (req, res) => {
  app.agregarGastoACeco(req.body.gasto, req.body.cecoId)
  
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
