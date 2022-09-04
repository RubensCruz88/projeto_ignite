import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { Especificacao } from '../../infra/typeorm/model/Especificacao';
import { EspecificacaoRepositorio } from '../../infra/typeorm/repositories/EspecificacaoRepositorio';

interface IRequest {
	nome: string;
	descricao: string;
}

@injectable()
class CriaEspecificacaoService {
	constructor(
		@inject("EspecificacaoRepositorio")
		private especificacaoRepository: EspecificacaoRepositorio
	){}

	async execute({nome, descricao}: IRequest): Promise<Especificacao> {
		const especificacaoExiste = await this.especificacaoRepository.VerificaDuplicado(nome);

		if(especificacaoExiste){
			throw new AppError("Especificação ja existe");
		}

		const especificacao = await this.especificacaoRepository.create({nome, descricao});
	
		return especificacao;
	}

}

export { CriaEspecificacaoService }