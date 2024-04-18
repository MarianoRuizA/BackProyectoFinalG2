import express from "express";

const router = express.Router();
//traer todas las reservas.
router.get("/reservas", (req, res)=> {
    res.send("reservas");
})
export default router;