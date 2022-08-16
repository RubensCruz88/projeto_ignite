import { CategoriaRepositorio } from '../repositories/CategoriaRepositorio';

class ListaCategoriaService{
	private categoriaRepositorio: CategoriaRepositorio

	constructor(){
		this.categoriaRepositorio = new CategoriaRepositorio();
	}

	execute()  {
		return this.categoriaRepositorio.list()
	}
}

export { ListaCategoriaService };