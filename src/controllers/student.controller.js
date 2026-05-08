import { Aluno, Turma } from '../models/student.model.js';
import {Op} from 'sequelize';

export async function getAllStudents(req, res) {
    try {
        const alunosEmRisco = await Aluno.findAll({
            attributes: ['nome', 'email', 'mediaGeral'],
            include: {
                model: Turma,
                attributes: ['nome', 'semestre'],
                where: {
                    semestre: {[Op.in]:[1,2]}
                }
            },
            where: {
                mediaGeral: {[Op.lt]: 7.0}
            },
            order: [['mediaGeral', 'ASC']]
        });

        console.log('Total em risco: ', alunosEmRisco.length);
        //Retorna a lista [vettor] [ array] => alunosEmRisco (query)
        res.status(200).json({alunosEmRisco: alunosEmRisco, total_risco: alunosEmRisco.length})
        
    } catch(error){
        res.status(500).json(error);
        res.status(500).json({message: "Erro ao buscar aluno: ", error})
    }
}