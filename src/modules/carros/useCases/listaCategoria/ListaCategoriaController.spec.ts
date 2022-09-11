import { v4 as uuid } from 'uuid';
import { hash } from 'bcryptjs';
import { createConnection } from '@shared/infra/typeorm/dataSource';
import { DataSource } from 'typeorm';
import request from 'supertest';
import { app } from '@shared/infra/http/app';

let connection: DataSource;

describe("Lista Categorias",() => {
	beforeAll(async () => {
		const id = uuid();
		const password = await hash("admin", 8)
	
		connection = await createConnection("localhost","rentx_teste");

		await connection.runMigrations();

		await connection.query( 
			`INSERT INTO "Usuario" (id, name, password, email, driver_license, "isAdmin", created_at) 
			VALUES('${id}','admin','${password}','admin@admin.com', 'XXXXXX',true, 'now()')
			`
		);

	});

	it("Deve ser possível listar todas as categorias",async () => {
		const responseToken = await request(app).post("/sessao")
			.send({
				email: "admin@admin.com",
				senha: "admin"
			});

		const { token } = responseToken.body;

		await request(app)
			.post("/categorias")
			.send({
				nome: "TESTE",
				descricao: "teste"
			})
			.set({
				Authorization: `Bearer ${token}`
			});

		const response = await request(app).get("/categorias");

		expect(response.status).toBe(200);
		expect(response.body.length).toBe(1);

	})

	afterAll( async () => {
		await connection.dropDatabase();
		await connection.destroy();
	})

})