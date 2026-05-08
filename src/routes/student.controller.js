import { Router } from "express";
import * as controller from '../controllers/user.controller.js';


const routerStudent = Router();

// Criar as rotas
routerStudent.get('/', controller.getAllStudents); //READ ALL

export default routerStudent;