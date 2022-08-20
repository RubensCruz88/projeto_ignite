import { Repository } from 'typeorm';
import { Especificacao } from '../model/Especificacao';
import { dataSource } from '../../../database/dataSource';

interface ICriaEspecificacaoDTO {
	nome: string;
	descricao: string;
}

interface IEspecificacaoRepositorio {
	create({ nome, descricao }: ICriaEspecificacaoDTO): Promise<Especificacao>;
	list(): Promise<Especificacao[]>;
	VerificaDuplicado(nome: string): Promise<Especificacao>;
}

class EspecificacaoRepositorio implements IEspecificacaoRepositorio{
	private repositorio: Repository<Especificacao>

	constructor(){
		this.repositorio = dataSource.getRepository(Especificacao);
	}

	async create({ nome, descricao }: ICriaEspecificacaoDTO): Promise<Especificacao> {
		const especificacao = this.repositorio.create({
			nome,
			descricao
		});
		
		await this.repositorio.save(especificacao);

		return especificacao;
	};

	async list(): Promise<Especificacao[]> {
		const especificacoes = await this.repositorio.find()

		return especificacoes;
	}

	async VerificaDuplicado(nome: string): Promise<Especificacao> {
		const especificacao = await this.repositorio.findOneBy({nome});

		return especificacao;
	}

}

export { IEspecificacaoRepositorio, EspecificacaoRepositorio };