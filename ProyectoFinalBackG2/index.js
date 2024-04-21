import express from "express"; //framework
import "dotenv/config";
import cors from "cors";
import reservaRouter from "./router/reservaRouter.js";
import connectDB from "./dataBase/db.js";

const app = express();
app.use(cors());

const PORT = process.env.PORT || 8080;

//en rutas esta el json.
app.use(express.json());
app.use("/api", reservaRouter)

const initApp = () => {
    try {
        connectDB() //se ejecuta la conexion a la base de datos.
        app.listen(PORT, () => {
            console.log(`Servidor iniciado en el puerto ${PORT}`);
        });
    } catch (error) {
        console.log("error12")
    }
}

initApp();