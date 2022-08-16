import { Categoria } from '../../model/Categoria';
import { CategoriaRepositorio } from '../../repositories/CategoriaRepositorio'

interface IRequest {
	nome: string;
	descricao: string;
}

class CriaCategoriaService {
	constructor( private categoriaRepository: CategoriaRepositorio){}

	execute({ nome, descricao }: IRequest): Categoria {
		const categoria = this.categoriaRepository.create({nome, descricao});

		return categoria;
	}

}

export { CriaCategoriaService }