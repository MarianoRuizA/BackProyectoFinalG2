import express from "express";
import reserverControllers from "../controllers/reserverControllers.js";

const router = express.Router();

//traer todas las reservas.
router.get("/reservas", reserverControllers.getAllReserver)

export default router;