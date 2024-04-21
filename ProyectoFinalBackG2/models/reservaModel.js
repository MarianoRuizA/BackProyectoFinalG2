import mongoose from "mongoose";
import { Schema } from "mongoose";

const reservasSchema = new Schema(
    {
        usuario: {
            type: String,
            required: true,
        }, 
        // sucursal: String,
        // servicio: String,
        // comensales: Number
    },
    { versionKey: false }
);

const ReservaModel = mongoose.model("Reservas", reservasSchema);

export default ReservaModel;