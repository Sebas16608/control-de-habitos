import express, { Express, Request, Response } from "express";
import morgan from "morgan";
import cors from "cors";

const app = express();

// MIDDLEWARE
app.use(morgan("dev"));
app.use(cors());

// Ruta principal
app.get("/", (req: Request, res: Response) => {
    res.json({
        mensaje: "bienvenido a como controlar tus habitos"
    });
});

export default app;