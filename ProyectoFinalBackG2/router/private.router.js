import express from "express";
import usuarioController from "../controllers/usuarioController.js";
import reservaControllers from '../controllers/reservaControllers.js'

const router = express.Router();

router.get("/admin", (req, res) => {
  res.json({
    error: null,
    data: {
      title: "Administrador",
      user: req.user,
    },
  });
});


router.get("/usuarios", usuarioController.getAllUsuarios);
router.patch("/usuarios/:id", usuarioController.updateUsuario);
router.delete("/usuarios/delete/:id", usuarioController.deleteUsuario);
router.delete("/reservas/:id", reservaControllers.eliminarReserva)
router.patch("/reservas/:id", reservaControllers.modificarReserva);

export default router;
