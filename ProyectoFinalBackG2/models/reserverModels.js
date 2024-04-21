import mongoose from "mongoose";
import { Schema } from "mongoose";

//objeto 

const reserverSchema = new Schema({ 
    usuario: { 
        type: String,
        unique: true, //evita que dos users se registren con un mismo email.
        require: true, //exige la existencia de un email para registrarse.
    },
    sucursal: String,
    comensales: Number,
    servicios: String,
    fecha: Date
},{versionKey: false})

const reserModels = mongoose.model ("reservas", reserverSchema)

export default reserModels;
//mongoose.model crea la conexion o bien si ya existe una conexion simplemente le agrega lo que esta en el new schema con toda la informacion que vaya a ingresarse.
