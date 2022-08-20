import './database/dataSource';
import "./shared/container";
import 'reflect-metadata';

import express from 'express';
import { categoriasRotas } from './routes/categoria.routes';
import { especificacaoRotas } from './routes/especificacao.routes';

import swaggerUi from 'swagger-ui-express';
import swaggerFile from "./swagger.json";

const app = express();

app.use(express.json());

//documentação da API
app.use("/api-docs",swaggerUi.serve,swaggerUi.setup(swaggerFile));

app.get("/",(request,response) => {
	return response.json({message: "oi outro mundo"})
})

app.use("/categorias",categoriasRotas);
app.use("/especificacao",especificacaoRotas);

app.listen(3333, () => console.log("servidor rodando"));


