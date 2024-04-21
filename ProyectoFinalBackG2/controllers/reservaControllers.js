import ReservaModel from "../models/reservaModel.js";

// Crear reserva

const crearReserva = async (req, res) => {
  try {
    const { usuario, sucursal, comensales, fecha, servicio } = req.body;
    const reserva = new ReservaModel({
      usuario,
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

// getAllReserva

const getAllReserva = async(req, res) => {
  try {
      const reservas = await ReservaModel.find();// --> recorre la conexion y trae todas las reservas.
      res.json(reservas);// --> aqui se guarda todo lo que trae el .find
  } catch (error) {
      console.log("errro")
  }
};

export default { crearReserva, getAllReserva };
