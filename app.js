import 'dotenv/config';
import express from 'express';

import sequelize from './src/config/database.js';
import './src/models/produto.model.js';
import authRouter from "./src/routes/auth.router.js";
import produtoRouter from "./src/routes/produto.router.js";

const app = express();

app.use(express.json());

app.use("/auth", authRouter);
app.use("/produto", produtoRouter);

sequelize.sync({ alter: true }).then(() => {
  console.log('Banco de dados sincronizado');
  app.listen(process.env.PORT, () =>
    console.log(`Servidor rodando na porta ${process.env.API_PORT}`)
  );
}).catch(error => {
  console.error('Erro ao sincronizar o banco de dados:', error);
});