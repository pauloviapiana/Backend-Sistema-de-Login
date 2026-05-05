import 'dotenv/config';
import express from 'express';
import cors from "cors";

import sequelize from './src/config/database.js';
import './src/models/usuario.model.js';
import authRouter from "./src/routes/auth.router.js";
import usuarioRouter from "./src/routes/usuario.router.js";
import { helmetConfig } from './src/config/helmet.js';
import { corsConfig } from './src/config/cors.js';
import { limitadorGlobal } from './src/config/rateLimit.js';

const app = express();

app.use(express.json());
app.use(cors(corsConfig));
app.use(helmetConfig);
app.use(limitadorGlobal);

app.use("/auth", authRouter);
app.use("/usuario", usuarioRouter);

sequelize.sync({ alter: true }).then(() => {
  console.log('Banco de dados sincronizado');
  app.listen(process.env.PORT, () =>
    console.log(`Servidor rodando na porta ${process.env.PORT}`)
  );
}).catch(error => {
  console.error('Erro ao sincronizar o banco de dados:', error);
});