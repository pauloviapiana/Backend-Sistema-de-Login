import Produto from "../models/produto.model.js";

export const cadastrar = async (req, res) => {
    try {

        const { nome, categoria, quantidade, valor_unitario } = req.body;

        if (!nome || !categoria || !quantidade || !valor_unitario) {
            return res.status(400).json({ erro: 'É necessário preencher todos os campos para cadastro do produto.' });
        }


        const produtoExistente = await Produto.findOne({ where: { nome } });
        if (produtoExistente) {
            return res.status(409).json({ erro: 'Produto já cadastrado' });
        }

        const novoProduto = await Produto.create({
            nome,
            categoria, 
            quantidade, 
            valor_unitario
        });

        return res.status(201).json({
            id: novoProduto.id,
            nome: novoProduto.nome,
            categoria: novoProduto.categoria,
            createdAt: novoProduto.createdAt
        });

    } catch (error) {
        console.error('Erro no cadastro:', error);
        return res.status(500).json({ erro: 'Erro interno no servidor' });
    }
};