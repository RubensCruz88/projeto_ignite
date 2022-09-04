import { Router } from 'express';

import { CriaEspecificacaoController } from "@modules/carros/useCases/criaEspecificacao/CriaEspecificacaoController";
import { ListaEspecificacaoController } from '@modules/carros/useCases/listaEspecificacao/ListaEspecificacaoController'

const especificacaoRotas = Router();

const criaEspecificacao = new CriaEspecificacaoController();
const listaEspecificacao = new ListaEspecificacaoController()

especificacaoRotas.post("/", criaEspecificacao.handle);

especificacaoRotas.get("/", listaEspecificacao.handle);

export {especificacaoRotas};