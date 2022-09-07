import { In, Repository } from 'typeorm';
import { Especificacao } from '../model/Especificacao';
import { dataSource } from '../../../../../shared/infra/typeorm/dataSource';
import { ICriaEspecificacaoDTO } from '../../../DTOs/ICriaEspecificacaoDTO';
import { IEspecificacaoRepositorio } from '@modules/carros/repositories/IEspecificacaoRepositorio';

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

	async buscaPorIds(ids: string[]): Promise<Especificacao[]> {
		const especificacoes = await this.repositorio.findBy({ id: In(ids) });

		return especificacoes;
	}

}

export { IEspecificacaoRepositorio, EspecificacaoRepositorio };