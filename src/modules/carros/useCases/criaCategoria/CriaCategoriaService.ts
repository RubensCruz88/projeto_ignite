import { AppError } from '../../../../errors/AppError';
import { inject, injectable} from 'tsyringe';
import { Categoria } from '../../model/Categoria';
import { ICategoriasRepositorio, CategoriaRepositorio } from '../../repositories/CategoriaRepositorio'

interface IRequest {
	nome: string;
	descricao: string;
}

@injectable()
class CriaCategoriaService {
	constructor(
		@inject("CategoriaRepositorio")
		private categoriaRepository: ICategoriasRepositorio
	){}

	async execute({ nome, descricao }: IRequest): Promise<Categoria> {
		const existeCategoria = await this.categoriaRepository.VerificaDuplicado(nome);

		if(existeCategoria){
			throw new AppError("Categoria já existe");
		}

		const categoria = await this.categoriaRepository.create({nome, descricao});

		return categoria;
	}

}

export { CriaCategoriaService }