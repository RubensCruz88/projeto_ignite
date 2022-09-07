import { CriaCarroController } from '@modules/carros/useCases/criaCarro/CriaCarroController';
import { confereAutenticado } from '../middlewares/confereAutenticado';
import { Router } from 'express';
import { confereAdmin } from '../middlewares/confereAdmin';
import { ListaCarrosDisponiveisController } from '@modules/carros/useCases/listaCarrosDisponiveis/ListaCarrosDisponiveisController';
import { CriaCarroEspecificacaoController } from '@modules/carros/useCases/criaCarroEspecificacao/CriaCarroEspecificacaoController';

const carroRotas = Router();

const criaCarroController = new CriaCarroController;
const listaCarrosDisponiveisController = new ListaCarrosDisponiveisController;
const criaCarroEspecificacaoController = new CriaCarroEspecificacaoController;

carroRotas.post(
	"/",
	confereAutenticado,
	confereAdmin,
	criaCarroController.handle
);

carroRotas.get("/disponiveis",listaCarrosDisponiveisController.handle);

carroRotas.post("/especificacoes/:id",criaCarroEspecificacaoController.handle);

export { carroRotas};