import { Router } from 'express';
import multer from 'multer';

import { confereAutenticado } from '../middlewares/confereAutenticado';

import { CriaCategoriaController } from '@modules/carros/useCases/criaCategoria/CriaCategoriaController';
import { ImportarCategoriaController } from '@modules/carros/useCases/importarCategorias/importarCategoriaController';
import { ListaCategoriaController } from '@modules/carros/useCases/listaCategoria/ListaCategoriaController';
import { confereAdmin } from '../middlewares/confereAdmin';

const categoriasRotas = Router();

const upload = multer({
	dest: "./tmp"
});

const criaCategoriaController = new CriaCategoriaController();
const listaCategoriaController = new ListaCategoriaController()
const importarcategoriaController = new ImportarCategoriaController();

categoriasRotas.post(
	"/",
	confereAutenticado,
	confereAdmin,
	criaCategoriaController.handle
);

categoriasRotas.get("/", listaCategoriaController.handle);

categoriasRotas.post("/importar", importarcategoriaController.handle);


export {categoriasRotas}