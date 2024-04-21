import ReservaModel from "../models/reservaModel.js";

//Eliminar Reserva
const eliminarReserva = async (req, res) =>{
    try {
        const { id } = req.params
        const reserva = await ReservaModel.findByIdAndDelete(id)
        res.status(200).json(reserva)
        
    } catch (error) {
        console.log(error)
    }
}


export default{
    eliminarReserva
}

