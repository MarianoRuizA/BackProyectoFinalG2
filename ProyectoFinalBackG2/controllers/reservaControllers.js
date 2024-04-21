import ReservaModel from "../models/reservaModel.js";

// Crear reserva

const crearReserva = async (req, res) => {
  try {
    const { id, email, sucursal, comensales, fecha, servicio } = req.body;
    const reserva = new ReservaModel({
      id,
      email,
      sucursal,
      comensales,
      fecha,
      servicio
    });
    await reserva.save();
    res.status(201).json({ message: "Reserva creada exitosamente" });
    console.log(res.status, "status");
  } catch (error) {
    res.status(400).json({ message: "Error al hacer la reserva" });
    console.log(error);
  }
};

export default { crearReserva };
