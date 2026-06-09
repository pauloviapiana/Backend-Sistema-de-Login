import { Router } from 'express';
import * as C from '../controllers/produto.controller.js';

const router = Router();

router.get('/produto', C.produto);
router.put('/produto', C.atualizarProduto);
router.get('/todos', C.todosProduto);

export default router;