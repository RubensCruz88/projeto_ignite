import { Router } from 'express';
import multer from 'multer';

import { criaCategoriaController } from '../modules/carros/useCases/criaCategoria';
import { listaCategoriaController } from '../modules/carros/useCases/listaCategoria';
import { importarCategoriaController } from '../modules/carros/useCases/importarCategorias';

const categoriasRotas = Router();

const upload = multer({
	dest: "./tmp"
});

categoriasRotas.post("/", (request, response) => {
	return criaCategoriaController.handle(request, response);
})

categoriasRotas.get("/",(request, response) =>{
	return listaCategoriaController.handle(request, response);
})

categoriasRotas.post("/importar",upload.single("file"),(request, response) =>{
	return importarCategoriaController.handle(request, response);
})


export {categoriasRotas}