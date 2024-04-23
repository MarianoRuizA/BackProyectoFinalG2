import express from "express";
import usuarioController from "../controllers/usuarioController.js";

const router = express.Router();

// Obtener usuarios
router.get("/usuarios", usuarioController.getAllUsuarios);
// Modificar usuario
router.patch("/usuarios/:id", usuarioController.updateUsuario);
// Eliminar usuario
router.delete("/usuarios/delete/:id", usuarioController.deleteUsuario);
// Crear/Registrar usuario
router.post("/registrar", usuarioController.registrarUsuario);
// Login usuario
router.post("/login", usuarioController.login);

export default router;