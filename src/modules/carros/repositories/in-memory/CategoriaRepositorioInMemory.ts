import { Categoria } from "../../infra/typeorm/model/Categoria";
import { ICategoriasRepositorio } from "../../infra/typeorm/repositories/CategoriaRepositorio";

class CategoriaRepositorioInMemory implements ICategoriasRepositorio{
	categorias: Categoria[] = [];

	async create({nome, descricao}): Promise<Categoria>{
		const categoria = new Categoria();

		Object.assign(categoria,{
			nome,
			descricao
		});

		this.categorias.push(categoria);

		return categoria;
	}

	async list(): Promise<Categoria[]>{
		const categorias = this.categorias
		return categorias
	}

	async VerificaDuplicado(nome: string): Promise<Categoria>{
		const categoria = this.categorias.find((categoria) => categoria.nome === nome);

		return categoria;
	}
}

export { CategoriaRepositorioInMemory }