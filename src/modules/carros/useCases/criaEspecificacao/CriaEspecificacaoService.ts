import { inject, injectable } from 'tsyringe';
import { Especificacao } from '../../model/Especificacao';
import { EspecificacaoRepositorio } from '../../repositories/EspecificacaoRepositorio';

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
			throw new Error("Especificação ja existe");
		}

		const especificacao = await this.especificacaoRepository.create({nome, descricao});
	
		return especificacao;
	}

}

export { CriaEspecificacaoService }