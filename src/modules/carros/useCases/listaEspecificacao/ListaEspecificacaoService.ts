import { inject, injectable} from 'tsyringe';
import { Especificacao } from '../../model/Especificacao';
import { EspecificacaoRepositorio } from '../../repositories/EspecificacaoRepositorio';

@injectable()
class ListaEspecificacaoService {
	constructor(
		@inject("EspecificacaoRepositorio")
		private especificacaoRepository: EspecificacaoRepositorio
	){}

	async execute(): Promise<Especificacao[]> {
		const especificacao = await this.especificacaoRepository.list();

		return especificacao;
	}

}

export { ListaEspecificacaoService }