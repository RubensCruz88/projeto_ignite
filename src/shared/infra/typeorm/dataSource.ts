import { DataSource } from 'typeorm';

const dataSource = new DataSource({
	type: "postgres",
	port: 5432,
	host: "localhost",
	username: "docker",
	password: "docker",
	database: "rentx",
	entities: ["src/modules/**/model/*.ts"],
	migrations: ["src/shared/infra/typeorm/migrations/*.ts"],
	synchronize: false,
	logging: ["error"]
});

export function createConnection(host = "database_ignite", database = "rentx"): Promise<DataSource> {

	return dataSource.setOptions({
		host,
		database
	}).initialize()
}


export { dataSource };