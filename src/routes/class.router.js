import { Router } from "express";
import * as controller from '../controllers/user.controller.js';


const routerUser = Router();

// Criar as rotas
routerUser.get('/', controller.getAllUsers); //READ ALL
routerUser.get('/id')