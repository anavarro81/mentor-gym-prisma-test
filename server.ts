import express from "express";



// import settingRoute from './src/routes/setting.routes'

import authRoute from "./src/routes/auth.routes";
// Carga las variables de entorno. Se pueden usar en todo el proyecto.
import "dotenv/config";
import cors from "cors";
import { corsConfig } from "./src/config/cors";
import {requestLogger, errorLogger} from './src/middleware/logger.middleware';
import logger from "./src/utils/logger";

const app = express();

app.use(cors(corsConfig));

// Permite leer los datos que vienen de un formulario
app.use(express.json());
app.use(requestLogger);
app.use((req, res, next) => {
  logger.warn(`peticion recibida : ${req.method} ${req.url}`);
  next();
});

app.use((req, res, next) => {
  // console.log("Middleware global: petición recibida en", req.method, req.url);
  logger.info(`petición recibida en ${req.method}, ${req.url}`)
  
  next();
});

app.use("/auth/", authRoute);

app.use("/", (req, res) => {  
  logger.warn(`La URL ${req.url} no existe` )
  res.status(404).json({ message: "La url solicitada no existe" });
});

app.use(errorLogger)

export default app;
