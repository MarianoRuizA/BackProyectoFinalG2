import express from 'express'
import reservaControllers from '../controllers/reservaControllers.js'

const router = express.Router()

// Crear reserva
router.post("/crear", reservaControllers.crearReserva);
// Traer reserva
router.get("/reservas", reservaControllers.getAllReserva)
// Eliminar reserva
router.delete("/reservas/:id", reservaControllers.eliminarReserva)
// Modificar reserva
router.patch("/reservas/:id", reservaControllers.modificarReserva);

export default router