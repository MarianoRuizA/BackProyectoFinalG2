import mongoose from "mongoose";
import { Schema } from "mongoose";

const reservasSchema = new Schema(
    {
        usuario: {
            type: String,
            required: true,
            unique: true
        }, // Necesario??
        sucursal: String,
        comensales: Number,
        fecha: Date,
        servicio: String,
    },
    { versionKey: false }
);

const ReservaModel = mongoose.model("reservas", reservasSchema);

export default ReservaModel;