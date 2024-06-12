import mongoose from "mongoose";
const URI = process.env.MONGO_URI

const connectDB = async () => {
    try {
      await mongoose.connect(`${URI}`,)//esta propiedad permite facilitar la conexion con db.
        console.log("conectado a la base de datos")
    } catch (error) {
        console.log("error")
    }
}

export default connectDB;