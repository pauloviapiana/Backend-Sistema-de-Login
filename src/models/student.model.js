import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import Turma from './class.model.js';


const Aluno = sequelize.define('Usuario', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: True,
        autoIncrement: True,
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true 
        }
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false
    },
    mediaGeral: {
        type: DataTypes.FLOAT
    }
}, {
    tableName: 'usuarios',
    timestamps: true
});

Turma.hasMany(Aluno, { foreignKey: 'turmaId'});
Aluno.belogns(Turma, { foreignKey: 'turmaId' });

export { Turma, Aluno };