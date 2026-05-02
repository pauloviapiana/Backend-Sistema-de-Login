import bcrypt from 'bcryptjs';
import Usuario from '../models/usuario.model.js';

export const perfil = async (req, res) => {
    try {
        const usuario = await Usuario.findByPk(req.usuario.id, {
            attributes: { exclude: ['senha'] } // Segurança: nunca traz a senha
        });

        if (!usuario) return res.status(404).json({ erro: 'Usuário não encontrado' });

        return res.json(usuario);
    } catch (error) {
        return res.status(500).json({ erro: 'Erro ao buscar perfil' });
    }
};

export const atualizarPerfil = async (req, res) => {
    try {
        const { nome, email, senha } = req.body;
        const usuario = await Usuario.findByPk(req.usuario.id);

        if (!usuario) return res.status(404).json({ erro: 'Usuário não encontrado' });

        if (senha) {
            const novoHash = await bcrypt.hash(senha, 10);
            usuario.senha = novoHash;
        }

        if (nome) usuario.nome = nome;
        if (email) usuario.email = email;

        await usuario.save();

        const usuarioAtualizado = usuario.toJSON();
        delete usuarioAtualizado.senha;

        return res.json(usuarioAtualizado);
    } catch (error) {
        return res.status(500).json({ erro: 'Erro ao atualizar perfil' });
    }
};

export const desativarConta = async (req, res) => {
    try {
        const usuario = await Usuario.findByPk(req.usuario.id);
        
        if (!usuario) return res.status(404).json({ erro: 'Usuário não encontrado' });

        usuario.ativo = false;
        await usuario.save();

        return res.status(204).send();
    } catch (error) {
        return res.status(500).json({ erro: 'Erro ao desativar conta' });
    }
};