import express from "express";
import "dotenv/config";
import cors from "cors";
import userRouter from "./router/userRouter.js";
import connectDB from "./database/db.js";

const app = express();

app.use(cors());

const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use("/api", userRouter);

const initApp = () => {
    try {
        connectDB();
        app.listen(PORT, () => {
            console.log(`Servidor iniciado en el puerto ${PORT}`);
        });
    } catch (error) {
        console.log(error);
    }
};

initApp();