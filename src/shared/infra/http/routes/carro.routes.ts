import { CriaCarroController } from '@modules/carros/useCases/criaCarro/CriaCarroController';
import { confereAutenticado } from '../middlewares/confereAutenticado';
import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '@config/upload';

import { confereAdmin } from '../middlewares/confereAdmin';
import { ListaCarrosDisponiveisController } from '@modules/carros/useCases/listaCarrosDisponiveis/ListaCarrosDisponiveisController';
import { CriaCarroEspecificacaoController } from '@modules/carros/useCases/criaCarroEspecificacao/CriaCarroEspecificacaoController';
import { UploadCarroImagemController } from '@modules/carros/useCases/uploadCarroImagem/UploadCarroImagemController';

const carroRotas = Router();

const criaCarroController = new CriaCarroController;
const listaCarrosDisponiveisController = new ListaCarrosDisponiveisController;
const criaCarroEspecificacaoController = new CriaCarroEspecificacaoController;
const uploadCarroImagemController = new UploadCarroImagemController;

const uploadImagens = multer(uploadConfig.upload("./tmp/carros"));


carroRotas.post(
	"/",
	confereAutenticado,
	confereAdmin,
	criaCarroController.handle
);

carroRotas.get("/disponiveis",listaCarrosDisponiveisController.handle);

carroRotas.post("/especificacoes/:id",criaCarroEspecificacaoController.handle);

carroRotas.post("/imagens/:id",
	uploadImagens.array("imagens"),
	uploadCarroImagemController.handle
);

export { carroRotas};