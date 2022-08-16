import { Especificacao } from '../../model/Especificacao';
import { EspecificacaoRepositorio } from '../../repositories/EspecificacaoRepositorio';

interface IRequest {
	nome: string;
	descricao: string;
}

class CriaEspecificacaoService {
	constructor( private especificacaoRepository: EspecificacaoRepositorio){}

	execute({nome, descricao}: IRequest): Especificacao {
		const especificacao = this.especificacaoRepository.create({nome, descricao});
	
		return especificacao;
	}

}

export { CriaEspecificacaoService }