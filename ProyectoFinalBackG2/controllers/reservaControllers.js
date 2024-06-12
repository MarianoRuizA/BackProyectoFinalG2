import ReservaModel from "../models/reservaModel.js";


const getAllReserva = async (req, res) => {
  try {
    const reservas = await ReservaModel.find();
    res.status(200).json(reservas); 
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

const crearReserva = async (req, res) => {
  try {
    const { usuario, sucursal, servicio, comensales, fecha } = req.body;
    const reserva = new ReservaModel({
      usuario,
      sucursal,
      servicio,
      comensales,
      fecha
    });
    await reserva.save();
    res.status(201).json({ message: "Reserva creada exitosamente" });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Error al hacer la reserva" });
  }
};

const modificarReserva = async (req, res) => {
  try {
    const { id } = req.params;
    const { usuario, sucursal, comensales, fecha, servicio } = req.body;

    const reserva = await ReservaModel.findByIdAndUpdate(
      id,
      { usuario, sucursal, comensales, fecha, servicio },
      { new: true }
    );

    if (!reserva) {
      return res.status(404).json({ message: "Reserva no encontrado" });
    }
    res.status(200).json(reserva); 
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

const eliminarReserva = async (req, res) => {
  try {
    const { id } = req.params
    const reserva = await ReservaModel.findByIdAndDelete(id)
    if (!reserva) {
      return res.status(404).json({ message: "Reserva no encontrada" }); 
    }
    res.status(200).json(reserva); 
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
}

export default { crearReserva, getAllReserva, eliminarReserva, modificarReserva};