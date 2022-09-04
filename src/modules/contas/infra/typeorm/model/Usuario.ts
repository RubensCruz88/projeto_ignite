import { v4 as uuid } from 'uuid';
import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';

@Entity("Usuario")
class Usuario {
	@PrimaryColumn()
	id: string;

	@Column()
	name: string;

	@Column()
	email: string;

	@Column()
	password: string;

	@Column()
	driver_license: string;

	@Column()
	isAdmin: boolean;

	@Column()
	avatar: string;

	@CreateDateColumn()
	created_at: Date

	constructor(){
		if (!this.id){
			this.id = uuid();
		}
	}
}

export { Usuario }
