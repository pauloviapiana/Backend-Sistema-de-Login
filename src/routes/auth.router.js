import { Router } from 'express';
import { cadastrar } from '../controllers/auth.controller.js';

const router = Router();

router.post('/cadastro', cadastrar);

export default router;  