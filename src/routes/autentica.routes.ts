import { Router } from 'express';
import { AutenticaUsuarioController } from '../modules/contas/useCases/autenticaUsuario/AutenticaUsuarioController';

const autenticaRotas = Router();

const autenticaUsuarioController = new AutenticaUsuarioController();

autenticaRotas.post("/sessao",autenticaUsuarioController.handle);



export { autenticaRotas };