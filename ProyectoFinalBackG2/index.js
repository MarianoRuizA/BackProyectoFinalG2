import express from "express"; //framework
import "dotenv/config";
import cors from "cors";
import reserverRouter from "./router/reserverRouter.js";
import reservaRouter from "./router/reservaRouter.js";
import userRouter from "./router/userRouter.js"
import connectDB from "./dataBase/db.js";


const app = express(); //se guardan las configuraciones de express.

const app = express();

app.use(cors());
//en rutas esta el json.
app.use(express.json());
app.use("/api", reservaRouter);
app.use("/api", userRouter)

const initApp = () => {
    try {
        connectDB() //se ejecuta la conexion a la base de datos.
        app.listen(PORT, () => {
            console.log(`Servidor iniciado en el puerto ${PORT}`);
        });
    } catch (error) {
        console.log("error")
    }
}
initApp()