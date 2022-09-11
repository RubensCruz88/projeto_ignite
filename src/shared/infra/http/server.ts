import { createConnection } from '../typeorm/dataSource';
import { app } from './app';

createConnection()
	.then(() => console.log("Banco de dados rodando"))
	.catch((err) => console.log("Erro na inicialização do banco de dados",err));


app.listen(3333, () => console.log("servidor rodando"));

