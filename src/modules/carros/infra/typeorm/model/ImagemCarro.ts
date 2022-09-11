import { v4 as uuid } from 'uuid';
import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

@Entity("imagem_carros")
class ImagemCarro {
	@PrimaryColumn()
	id: string;

	@Column()
	carro_id: string;

	@Column()
	nome_imagem: string;

	@CreateDateColumn()
	created_at: Date;

	constructor(){
		if(!this.id){
			this.id = uuid();
		}
	}

}

export { ImagemCarro }