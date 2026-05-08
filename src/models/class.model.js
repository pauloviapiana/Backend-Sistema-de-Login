import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Turma = sequelize.define('TURMA', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: True,
        primaryKey: True,
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    semestre: {
        type: DataTypes.INTEGER,
    },
    curso: {
        type: DataTypes.STRING
    }
}, {
    tableName: 'TURMA',
    timestamps: true
});

export default Turma;