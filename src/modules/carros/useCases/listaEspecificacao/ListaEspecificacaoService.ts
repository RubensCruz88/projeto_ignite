import { Especificacao } from '../../model/Especificacao';
import { EspecificacaoRepositorio } from '../../repositories/EspecificacaoRepositorio';

class ListaEspecificacaoService {
	constructor( private especificacaoRepository: EspecificacaoRepositorio){}

	execute(): Especificacao[] {
		const especificacao = this.especificacaoRepository.list();
	
		return especificacao;
	}

}

export { ListaEspecificacaoService }