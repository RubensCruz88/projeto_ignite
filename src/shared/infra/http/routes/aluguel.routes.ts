import { CriaAluguelController } from '@modules/alugueis/useCases/criaAluguel/CriaAluguelController';
import { Router } from 'express';
import { confereAutenticado } from '../middlewares/confereAutenticado';


const aluguelRotas = Router();

const criaAluguelController = new CriaAluguelController();

aluguelRotas.post("/",confereAutenticado,criaAluguelController.handle);

export { aluguelRotas }
