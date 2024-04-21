import ReservaModel from "../models/reservaModel.js";

const eliminarReserva = async (req, res) =>{
    try {
        const { id } = req.params
        const reserva = await ReservaModel.findByIdAndDelete(id)
        res.status(200).json(reserva)
        
    } catch (error) {
        console.log(error)
    }
}

const traer = async (req, res) =>
{
    try {
        const reservas = await ReservaModel.find()
        console.log("holakshdwkfeug", reservas)
        res.status(200).json(reservas)
    } catch (error) {
        console.log(error)
    }
}

export default{
    eliminarReserva, 
    traer
}

