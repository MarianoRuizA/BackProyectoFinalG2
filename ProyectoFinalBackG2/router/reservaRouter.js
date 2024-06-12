import express from 'express'
import reservaControllers from '../controllers/reservaControllers.js'

const router = express.Router()

router.post("/crear", reservaControllers.crearReserva);
router.get("/reservas", reservaControllers.getAllReserva)

export default router