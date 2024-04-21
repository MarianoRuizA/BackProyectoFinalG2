import express from "express";
import reservaControllers from "../controllers/reservaControllers.js";

const router = express.Router();

// Crear reserva
router.post("/crear", reservaControllers.crearReserva);
// Traer reserva
router.get("/reservas", reservaControllers.getAllReserva)

export default router