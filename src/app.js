import 'dotenv/config';
import express from 'express';
import sequelize from './database/db.js';
import routerUser from './router/user.router.js'

// Importar model para garantir regristro no squelize;
import './model/user.model.js';

const app = express();
app.use(express.json());

app.use('/users', routerUser);

sequelize.sync({ alter: true }).then( 
    ()=>{
        app.listen(process.env.API_PORT, ()=>{
            console.log(`Server rodando em localhost:${process.env.API_PORT}`);
        });
}).catch(err => console.log("Erro ao sicronizar ou iniciar o server: ", err));