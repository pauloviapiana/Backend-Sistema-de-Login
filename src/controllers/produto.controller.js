import Produto from "../models/produto.model.js";

export const produto = async (req, res) => {
    try {
        const produto = await Produto.findByPk(req.produto.id, {
        });

        if (!produto) return res.status(404).json({ erro: 'Produto não encontrado' });

        return res.json(produto);
    } catch (error) {
        return res.status(500).json({ erro: 'Erro ao buscar produto' });
    }
};

export const atualizarProduto = async (req, res) => {
    try {
        const { nome, categoria, quantidade, valor_unitario } = req.body;
        const produto = await Produto.findByPk(req.produto.id);

        if (!produto) return res.status(404).json({ erro: 'Produto não encontrado' });
        if (nome) produto.nome = nome;
        if (nome) produto.categoria = categoria;
        if (quantidade) usuario.quantidade = quantidade;
        if (valor_unitario) usuario.valor_unitario = valor_unitario;

        await produto.save();

        const produtoAtualizado = produto.toJSON();

        return res.json(produtoAtualizado);
    } catch (error) {
        return res.status(500).json({ erro: 'Erro ao atualizar produto' });
    }
};