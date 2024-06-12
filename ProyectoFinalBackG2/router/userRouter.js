import express from "express";
import usuarioController from "../controllers/usuarioController.js";

const router = express.Router();

router.post("/registrar", usuarioController.registrarUsuario);
router.post("/login", usuarioController.login);

export default router;