import 'dotenv/config';
import express from 'express';
import cors from "cors";

import sequelize from './src/config/database.js';
import './src/models/usuario.model.js';
import authRouter from "./src/routes/auth.router.js";
import usuarioRouter from "./src/routes/usuario.router.js";

const app = express();

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}))

app.use(express.json());

app.use("/auth", authRouter)
app.use("/usuario", usuarioRouter)

sequelize.sync({ alter: true }).then(() => {
  console.log('Banco de dados sincronizado');
  app.listen(process.env.PORT, () =>
    console.log(`Servidor rodando na porta ${process.env.PORT}`)
  );
}).catch(error => {
  console.error('Erro ao sincronizar o banco de dados:', error);
});