import 'reflect-metadata';
import './database/dataSource';
import "./shared/container";

import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import { categoriasRotas } from './routes/categoria.routes';
import { especificacaoRotas } from './routes/especificacao.routes';
import { usersRotas } from './routes/usuario.routes';
import { autenticaRotas } from './routes/autentica.routes';

import swaggerUi from 'swagger-ui-express';
import swaggerFile from "./swagger.json";
import { createConnection } from './database/dataSource';
import { AppError } from './errors/AppError';

const app = express();

app.use(express.json());

createConnection()
	.then(() => console.log("Banco de dados rodando"))
	.catch((err) => console.log("Erro na inicialização do banco de dados",err));

//documentação da API
app.use("/api-docs",swaggerUi.serve,swaggerUi.setup(swaggerFile));

app.get("/",(request,response) => {
	return response.json({message: "Hello World"})
})

app.use(autenticaRotas);
app.use("/categorias",categoriasRotas);
app.use("/especificacao",especificacaoRotas);
app.use('/usuario',usersRotas);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
	if(err instanceof AppError){
		return response.status(err.codigoStatus).json({mensagem: err.mensagem})
	}

	return response.status(500).json({
		status: "error",
		menssagem: `Internal Server Error - ${err.message}`
	});
});

app.listen(3333, () => console.log("servidor rodando"));


