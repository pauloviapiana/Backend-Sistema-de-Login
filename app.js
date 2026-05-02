import 'dotenv/config';
import express from 'express';
import sequelize from './src/config/database.js';
import './src/models/usuario.model.js';

const app = express();

app.use(express.json());

sequelize.sync({ alter: true }).then(() => {
  console.log('Banco de dados sincronizado');
  app.listen(process.env.PORT, () =>
    console.log(`Servidor rodando na porta ${process.env.PORT}`)
  );
}).catch(error => {
  console.error('Erro ao sincronizar o banco de dados:', error);
});