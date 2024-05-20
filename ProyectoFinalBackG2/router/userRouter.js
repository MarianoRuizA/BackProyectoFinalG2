import express from "express";
import usuarioController from "../controllers/usuarioController.js";

const router = express.Router();

// Crear/Registrar usuario
router.post("/registrar", usuarioController.registrarUsuario);
// Login usuario
router.post("/login", usuarioController.login);

export default router;