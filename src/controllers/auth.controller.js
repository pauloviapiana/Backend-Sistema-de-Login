import bcrypt from 'bcryptjs';
import Usuario from '../models/usuario.model.js';

export const cadastrar = async (req, res) => {
    try {

        const { nome, email, senha } = req.body;

        if (!nome || !email || !senha) {
            return res.status(400).json({ erro: 'Nome, email e senha são obrigatórios' });
        }


        const usuarioExistente = await Usuario.findOne({ where: { email } });
        if (usuarioExistente) {
            return res.status(409).json({ erro: 'E-mail já cadastrado' });
        }


        const senhaHash = await bcrypt.hash(senha, 10);

        const novoUsuario = await Usuario.create({
            nome,
            email,
            senha: senhaHash
        });

        return res.status(201).json({
            id: novoUsuario.id,
            nome: novoUsuario.nome,
            email: novoUsuario.email,
            createdAt: novoUsuario.createdAt
        });

    } catch (error) {
        console.error('Erro no cadastro:', error);
        return res.status(500).json({ erro: 'Erro interno no servidor' });
    }
};