import { EspecificacaoRepositorio } from '../repositories/EspecificacaoRepositorio';

interface IRequest {
	nome: string;
	descricao: string;
}

class CriaEspecificacaoService {
	constructor( private especificacaoRepositorio: EspecificacaoRepositorio){}

	execute({nome, descricao}: IRequest): void {
		const especificacaoJaExiste = this.especificacaoRepositorio.VerificaDuplicado(nome);

		if(especificacaoJaExiste) {
			throw new Error("Categoria ja existente");
			}
	
		this.especificacaoRepositorio.create({nome, descricao});
	}
}
 
export { CriaEspecificacaoService };