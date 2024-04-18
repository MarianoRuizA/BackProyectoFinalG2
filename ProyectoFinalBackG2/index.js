import express from "express"; //framework
import "dotenv/config";
import cors from "cors";
import reserverRouter from "./router/reserverRouter.js";
import connectDB from "./dataBase/db.js";


const app = express(); //se guardan las configuraciones de express.

app.use(cors());

//se llama al port que esta en .env y a su ves se pasa un 2do puerto, si es que el del .env no esta disponible. Finalmente se levanta el servidor.
const PORT = process.env.PORT || 5050;

//en rutas esta el json.
app.use(express.json());

app.use("/api", reserverRouter)
//endpoints de prueba.
//http://localhost:4000/api/reservas

//levantamos en servidor.
const init = () => {
    try {
        connectDB() //se ejecuta la conexion a la base de datos.
        app.listen(PORT, () => {
            console.log("servidor levantado desde el puerto 4000");
        });
    } catch (error) {
        console.log("error")
    }
}
init()
