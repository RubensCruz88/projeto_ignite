import { Categoria } from '../model/Categoria';

interface ICriaCategoriaDTO {
	nome: string;
	descricao: string;
}

class CategoriaRepositorio{
	private categorias: Categoria[];

	private static INSTANCE: CategoriaRepositorio;

	constructor(){
		this.categorias = [];
	}

	public static getInstance(): CategoriaRepositorio {
		if (!CategoriaRepositorio.INSTANCE) {
			CategoriaRepositorio.INSTANCE = new CategoriaRepositorio();
		}

		return CategoriaRepositorio.INSTANCE;
	};

	create({ nome, descricao }: ICriaCategoriaDTO): Categoria {
		const categoria = new Categoria(); 
		Object.assign(categoria,{
			nome,
			descricao,
			created_at: new Date()
		});
	
		this.categorias.push(categoria);

		return categoria;
	};

	list(): Categoria[] {
		return this.categorias;
	}

	VerificaDuplicado(nome: string): Categoria {
		const categoria = this.categorias.find( categoria => categoria.nome === nome);

		return categoria;
	}
}

export { CategoriaRepositorio };