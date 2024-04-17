import express from "express";

const router = express.Router();
//traer todas las reservas.
router.get("/reserver", (req, res)=> {
    res.send("reserva");
})
export default router;