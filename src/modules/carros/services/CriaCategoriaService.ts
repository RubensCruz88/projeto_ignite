import { CategoriaRepositorio } from '../repositories/CategoriaRepositorio';

interface IRequest {
	nome: string;
	descricao: string;
}

class CriaCategoriaService{
	private categoriaRepositorio: CategoriaRepositorio

	constructor(){
		this.categoriaRepositorio = new CategoriaRepositorio();
	}

	execute({nome, descricao}: IRequest): void {
		const categoriaJaExiste = this.categoriaRepositorio.VerificaDuplicado(nome);

		if(categoriaJaExiste){
			throw new Error("Categoria já existe");
		}

		this.categoriaRepositorio.create({nome, descricao});
	}

}

export { CriaCategoriaService };