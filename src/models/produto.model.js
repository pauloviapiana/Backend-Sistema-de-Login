import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Produto = sequelize.define('Produto', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    categoria: {
        type: DataTypes.ENUM('Eletronicos', 'Casa', 'Moda'),
        allowNull: false,
    },
    quantidade: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    valor_unitario: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
}, {
    tableName: 'produto',
    timestamps: true
});

export default Produto;