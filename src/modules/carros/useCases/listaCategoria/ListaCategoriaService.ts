import { Categoria } from '../../model/Categoria';
import { CategoriaRepositorio } from '../../repositories/CategoriaRepositorio';

class ListaCategoriaService {
	constructor(private categoriaRepositorio: CategoriaRepositorio){}

	execute(): Categoria[]{
		const categorias = this.categoriaRepositorio.list();

		return categorias;
	}

}

export { ListaCategoriaService }

