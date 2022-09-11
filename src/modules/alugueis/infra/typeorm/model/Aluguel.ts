import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity("aluguel")
class Aluguel {
	@PrimaryColumn()
	id: string;

	@Column()
	carro_id: string;

	@Column()
	usuario_id: string;

	@Column()
	data_inicio: Date;

	@Column()
	data_fim: Date;

	@Column()
	data_retorno_esperado: Date;

	@Column()
	total: number;

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;

	constructor(){
		if(!this.id){
			this.id = uuid();
		}
	}
}

export { Aluguel }