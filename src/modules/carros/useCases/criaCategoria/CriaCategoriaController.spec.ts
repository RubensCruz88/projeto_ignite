import { v4 as uuid } from 'uuid';
import { hash } from 'bcryptjs';
import { app } from '@shared/infra/http/app';
import request from 'supertest';
import { createConnection } from '@shared/infra/typeorm/dataSource';
import { DataSource } from 'typeorm';

let connection: DataSource;

describe("Cria Categoria Controller",() => {
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

	})

	it("deve ser possível criar uma nova categoria",async () =>{
		const responseToken = await request(app).post("/sessao")
			.send({
				email: "admin@admin.com",
				senha: "admin"
			});

		const { token } = responseToken.body;

		const response = await request(app)
			.post("/categorias")
			.send({
				nome: "TESTE",
				descricao: "teste"
			})
			.set({
				Authorization: `Bearer ${token}`
			});

		expect(response.status).toBe(200);
	});

	it("não deve ser possível criar uma nova categoria se o nome ja existir",async () =>{
		const responseToken = await request(app).post("/sessao")
			.send({
				email: "admin@admin.com",
				senha: "admin"
			});

		const { token } = responseToken.body;

		const response = await request(app).post("/categorias")
		.send({
			nome: "TESTE",
			descricao: "teste"
		})
		.set({
			Authorization: `Bearer ${token}`
		});

		expect(response.status).toBe(400);
	});

	afterAll( async () => {
		await connection.dropDatabase();
		await connection.destroy();
	})
})