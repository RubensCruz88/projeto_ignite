import 'reflect-metadata';
import { CarroRepositorioInMemory } from "@modules/carros/repositories/in-memory/CarroRepositorioInMemory";
import { AppError } from "@shared/errors/AppError";
import { CriaCarroService } from "./CriaCarroService"

let criaCarroService: CriaCarroService;
let carroRepositorio: CarroRepositorioInMemory;

describe("Cria carro", () => {
	beforeEach(() => {
		carroRepositorio = new CarroRepositorioInMemory();
		criaCarroService = new CriaCarroService(carroRepositorio);
	})

	it("deve criar um novo carro",async () => {
		const carro = await criaCarroService.execute({
			nome: "nome carro",
			descricao: "Descricao do carro",
			valor_diario: 100,
			placa: "ABC1234",
			valor_multa: 50,
			marca: "Teste",
			id_categoria: "Categoria"
			});

		expect(carro).toHaveProperty("id");
	})

	it("não deve criar um carro com uma placa ja existente",() => {
		expect(async () => {
			await criaCarroService.execute({
				nome: "nome carro",
				descricao: "Descricao do carro",
				valor_diario: 100,
				placa: "ABC1234",
				valor_multa: 50,
				marca: "Teste",
				id_categoria: "Categoria"
			});

			await criaCarroService.execute({
				nome: "outro carro",
				descricao: "Descricao do carro",
				valor_diario: 100,
				placa: "ABC1234",
				valor_multa: 50,
				marca: "outra",
				id_categoria: "Categoria"
			});
		}).rejects.toBeInstanceOf(AppError);
	});

	it("Deve ser possivel criar um carro com disponibilidade = true por padrão",async () => {
		const carro = await criaCarroService.execute({
			nome: "nome carro",
			descricao: "Descricao do carro",
			valor_diario: 100,
			placa: "ABC1234",
			valor_multa: 50,
			marca: "Teste",
			id_categoria: "Categoria"
		})

		expect(carro.disponivel).toBe(true);
	})
})