import express from "express"; 
import "dotenv/config";
import cors from "cors";
import userRouter from "./router/userRouter.js";
import reservaRouter from "./router/reservaRouter.js";
import connectDB from "./dataBase/db.js";
import privateRouter from "./router/private.router.js";
import comprobacionJwt from "./middleware/comprobacionJwt.js";

const app = express();

app.use(cors());

const PORT = process.env.PORT || 8080;


app.use(express.json());
app.use("/api", userRouter);
app.use("/api", reservaRouter)
app.use("/api", comprobacionJwt,  privateRouter);

const initApp = () => {
    try {
        connectDB() 
        app.listen(PORT, () => {
            console.log(`Servidor iniciado en el puerto ${PORT}`);
        });
    } catch (error) {
        console.log("error")
    }
}

initApp();