import { DataSource } from 'typeorm';

const dataSource = new DataSource({
	type: "postgres",
	port: 5432,
	host: "database_ignite",
	username: "docker",
	password: "docker",
	database: "rentx",
	entities: ["src/modules/**/model/*.ts"],
	migrations: ["src/database/migrations/*.ts"]
});

dataSource
	.initialize()
	.then(() => console.log("Banco de dados rodando"))
	.catch((err) => console.log("Erro na inicialização do banco de dados",err));


export { dataSource };