import express from "express";

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

// Obtener usuarios
router.get("/usuarios", usuarioController.getAllUsuarios);
// Modificar usuario
router.patch("/usuarios/:id", usuarioController.updateUsuario);
// Eliminar usuario
router.delete("/usuarios/delete/:id", usuarioController.deleteUsuario);
// Eliminar reserva
router.delete("/reservas/:id", reservaControllers.eliminarReserva)
// Modificar reserva
router.patch("/reservas/:id", reservaControllers.modificarReserva);

export default router;
