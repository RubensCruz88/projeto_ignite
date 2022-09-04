import { Repository } from 'typeorm';
import { Categoria } from '../model/Categoria';
import { dataSource } from '@shared/infra/typeorm/dataSource';

interface ICriaCategoriaDTO {
	nome: string;
	descricao: string;
}

interface ICategoriasRepositorio {
	create({nome, descricao}: ICriaCategoriaDTO): Promise<Categoria>
	list(): Promise<Categoria[]>
	VerificaDuplicado(nome: string): Promise<Categoria>
}

class CategoriaRepositorio implements ICategoriasRepositorio{
	private repositorio: Repository<Categoria>
	
	constructor(){
		this.repositorio = dataSource.getRepository(Categoria);
	}

	async create({ nome, descricao }: ICriaCategoriaDTO): Promise<Categoria> {
	
		const categoria = this.repositorio.create({
			nome,
			descricao
		})
	
		await this.repositorio.save(categoria);
		
		return categoria;
	};

	async list(): Promise<Categoria[]> {
		const categorias = await this.repositorio.find();

		return categorias;
	}

	async VerificaDuplicado(nome: string): Promise<Categoria> {
		const categoria = await this.repositorio.findOneBy({nome});

		return categoria;
	}
}

export { CategoriaRepositorio, ICategoriasRepositorio };