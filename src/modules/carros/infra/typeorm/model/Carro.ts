import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Categoria } from './Categoria';
import { Especificacao } from './Especificacao';

@Entity("carros")
class Carro {
	@PrimaryColumn()
	id: string;

	@Column()
	nome: string;

	@Column()
	descricao: string;

	@Column()
	valor_diario: number;

	@Column()
	disponivel: boolean;

	@Column()
	placa: string;

	@Column()
	valor_multa: number;

	@Column()
	marca: string;

	@ManyToOne(() => Categoria)
	@JoinColumn({name: "id_categoria"})
	categoria: Categoria;

	@Column()
	id_categoria: string;

	@ManyToMany(() => Especificacao)
	@JoinTable({
		name: "especificacoes_carros",
		joinColumns: [{name: "carro_id"}],
		inverseJoinColumns: [{name: "especificacao_id"}]
	})
	especificacoes: Especificacao[];


	@CreateDateColumn()
	created_at: Date;

	constructor(){
		if(!this.id){
			this.id = uuid();
			this.disponivel = true;
		}
	}
}

export { Carro }