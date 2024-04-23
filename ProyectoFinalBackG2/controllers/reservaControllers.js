import ReservaModel from "../models/reservaModel.js";


// getAllReserva
const getAllReserva = async (req, res) => {
  try {
    const reservas = await ReservaModel.find();// --> recorre la conexion y trae todas las reservas.
    res.status(200).json(reservas); // --> aqui se guarda todo lo que trae el .find
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

// Crear reserva
const crearReserva = async (req, res) => {
  try {
    const { usuario, sucursal, comensales, fecha, servicio } = req.body;
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

// Modificar reserva
const modificarReserva = async (req, res) => {
  try {
    const { id } = req.params;
    const { usuario, sucursal, comensales, fecha, servicio } = req.body;

    // Actualiza la reserva en la base de datos
    const reserva = await ReservaModel.findByIdAndUpdate(
      id,
      { usuario, sucursal, comensales, fecha, servicio },
      { new: true }
    );

    if (!reserva) {
      return res.status(404).json({ message: "Reserva no encontrado" });
    }
    res.status(200).json(reserva); // OK
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

//Eliminar Reserva
const eliminarReserva = async (req, res) => {
  try {
    const { id } = req.params
    const reserva = await ReservaModel.findByIdAndDelete(id)
    if (!reserva) {
      return res.status(404).json({ message: "Reserva no encontrada" }); // Not Found
    }
    res.status(200).json(reserva); // OK
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
}

export default { crearReserva, getAllReserva, eliminarReserva, modificarReserva};