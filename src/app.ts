import express from "express";
/**
 * Com a rota criada, preciso importar
 * o userRoute
 */
import userRoute from "./routes/user.routes";

const app = express();

app.use(express.json());

/**
 * Depois tenho que dizer para
 * a aplicação usar o userRoute
 */
app.use(userRoute);

export { app };
