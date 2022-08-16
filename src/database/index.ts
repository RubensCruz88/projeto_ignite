import { DataSource } from 'typeorm';

const connection = new DataSource({
	type: "postgres",
	port: 5432,
	host: "database_ignite",
	username: "docker",
	password: "docker",
	database: "rentx"
});

export { connection };