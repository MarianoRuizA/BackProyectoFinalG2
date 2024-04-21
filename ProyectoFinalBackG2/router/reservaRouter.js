import express from 'express'
import reservaControllers from '../controllers/reservaControllers.js'

const router = express.Router()


router.delete("/reservas/:id", reservaControllers.eliminarReserva)
router.get("/reservas", reservaControllers.traer)


export default router