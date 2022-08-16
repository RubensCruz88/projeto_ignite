import { Router } from 'express';

import { criaEspecificacaoController } from '../modules/carros/useCases/criaEspecificacao'
import { listaEspecificacaoController } from '../modules/carros/useCases/listaEspecificacao'

const especificacaoRotas = Router();

especificacaoRotas.post("/", (request, response) => {
	criaEspecificacaoController.handle(request, response);
})

especificacaoRotas.get("/",(request, response) =>{
	listaEspecificacaoController.handle(request, response);
})

export {especificacaoRotas};