import { Router } from 'express';
import { cadastrar, login } from '../controllers/auth.controller.js';
import { limitadorCadastro, limitadorLogin } from '../config/rateLimit.js';

const router = Router();

router.post('/cadastro', limitadorCadastro, cadastrar);
router.post('/login', limitadorLogin, login)

export default router;  