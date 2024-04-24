import mongoose from "mongoose";
import { Schema } from "mongoose";

const reservasSchema = new Schema(
    {
        usuario: {
            type: String,
            required: true,
        }, 
        sucursal: String,
        servicio: String,
        comensales: String,
        fecha: String
    },
    { versionKey: false }
);

const ReservaModel = mongoose.model("reservas", reservasSchema);

export default ReservaModel;