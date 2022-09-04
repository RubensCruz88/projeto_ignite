import { inject, injectable} from 'tsyringe';
import { Especificacao } from '../../infra/typeorm/model/Especificacao';
import { EspecificacaoRepositorio } from '../../infra/typeorm/repositories/EspecificacaoRepositorio';

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