import 'reflect-metadata';
import './database/dataSource';
import "./shared/container";

import express from 'express';
import { categoriasRotas } from './routes/categoria.routes';
import { especificacaoRotas } from './routes/especificacao.routes';

import swaggerUi from 'swagger-ui-express';
import swaggerFile from "./swagger.json";
import { createConnection } from './database/dataSource';

const app = express();

app.use(express.json());

createConnection()
	.then(() => console.log("Banco de dados rodando"))
	.catch((err) => console.log("Erro na inicialização do banco de dados",err));

//documentação da API
app.use("/api-docs",swaggerUi.serve,swaggerUi.setup(swaggerFile));

app.get("/",(request,response) => {
	return response.json({message: "oi outro mundo"})
})

app.use("/categorias",categoriasRotas);
app.use("/especificacao",especificacaoRotas);

app.listen(3333, () => console.log("servidor rodando"));


