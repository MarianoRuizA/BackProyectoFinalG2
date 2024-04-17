import mongoose from "mongoose";
//conexion a la base de datos.
const URI = process.env.MONGO_URI
const DB = process.env.MONGO_DB

const connectDB = async () => {
    try {
    await mongoose.connect(`${URI}/${DB}`,)//esta propiedad permite facilitar la conexion con db.
        console.log("conectado a la base de datos")
    } catch (error) {
        console.log("error")
    }
}

export default connectDB;