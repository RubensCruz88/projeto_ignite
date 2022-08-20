import { v4 as uuid } from 'uuid';
import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';

@Entity("Especificacao")
class Especificacao{
	@PrimaryColumn()
	id?: string;

	@Column()
	nome: string;

	@Column()
	descricao: string;

	@CreateDateColumn()
	created_at: Date

	constructor(){
		if (!this.id){
			this.id = uuid();
		}
	}
}

export { Especificacao };