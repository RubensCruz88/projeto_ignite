import 'reflect-metadata';
import { CriaCategoriaService } from '../criaCategoria/CriaCategoriaService'	
import { CategoriaRepositorioInMemory } from '../../repositories/in-memory/CategoriaRepositorioInMemory';
import { AppError } from '@errors/AppError';

let criaCategoriaService: CriaCategoriaService;
let categoriaRepositorioInMemory: CategoriaRepositorioInMemory;

describe("Criar categoria",() => {
	beforeEach(() => {
		categoriaRepositorioInMemory = new CategoriaRepositorioInMemory();
		criaCategoriaService = new CriaCategoriaService(categoriaRepositorioInMemory);
	})


	it("Deve conseguir criar uma nova categoria", async () => {
		const categoria = {
			nome: "Teste",
			descricao: "descricao teste"
		};

		const categoriaCriada = await criaCategoriaService.execute(categoria);

		expect(categoriaCriada).toHaveProperty("id");
		
	});

	it("Não deve conseguir criar uma nova categoria com nome ja existente", async () => {
		const categoria = {
			nome: "Teste",
			descricao: "descricao teste"
		};

		expect( async () => {
			const categoriaCriada = await criaCategoriaService.execute(categoria);
			const categoriaDuplicada = await criaCategoriaService.execute(categoria);
		}).rejects.toBeInstanceOf(AppError);

			
	})

})