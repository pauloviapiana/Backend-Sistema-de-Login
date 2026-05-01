import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    { 
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: 'postgres',
        logging: false,
        benchmark: true,
        define: {
            timestamps: true,
            underscored: true
        }
    }
 );

export default sequelize;

try{
    await sequelize.authenticate();
    console.log("Conexão com o Banco estabelecida com sucesso!");
} catch(error){
    console.log("Erro ao tentar conexão com o Banco: ", error);   
}