import { inject, injectable } from 'tsyringe'
import { Categoria } from '../../model/Categoria';
import { CategoriaRepositorio } from '../../repositories/CategoriaRepositorio';

@injectable()
class ListaCategoriaService {
	constructor(
		@inject("CategoriaRepositorio")
		private categoriaRepositorio: CategoriaRepositorio
	){}

	async execute(): Promise<Categoria[]>{
		const categorias = await this.categoriaRepositorio.list();

		return categorias;
	}

}

export { ListaCategoriaService }

