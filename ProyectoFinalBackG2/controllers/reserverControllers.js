import reserModels from "../models/reserverModels.js";

//traer todas las reservas.
const getAllReserver = async(req, res) => {
    try {
        const reservas = await reserModels.find();// --> recorre la conexion y trae todas las reservas.
        res.json(reservas);// --> aqui se guarda todo lo que trae el .find
    } catch (error) {
        console.log("errro")
    }
};

export default {
    getAllReserver
}