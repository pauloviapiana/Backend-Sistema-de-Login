import { Router } from 'express';
import * as C from '../controllers/user.controller.js';
import autenticar from '../middlewares/auth.middleware.js';

const router = Router();

router.get('/perfil', autenticar, C.perfil);
router.put('/perfil', autenticar, C.atualizarPerfil);
router.delete('/conta', autenticar, C.desativarConta);

export default router;