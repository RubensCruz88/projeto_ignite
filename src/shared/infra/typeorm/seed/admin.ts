import { dataSource } from '../dataSource';
import { v4 as uuid } from 'uuid';
import { hash } from 'bcryptjs';

async function create() {

	const id = uuid();
	const password = await hash("admin", 8)

	await dataSource.initialize();

	dataSource.createQueryRunner()


	await dataSource.query( 
		`INSERT INTO "Usuario" (id, name, password, email, driver_license, "isAdmin", created_at) 
		VALUES('${id}','admin','${password}','admin@admin.com', 'XXXXXX',true, 'now()')
		`
	);

}

create().then(() => console.log("Usuario admin criado"))
