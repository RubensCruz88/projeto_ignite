import { CarroRepositorioInMemory } from "@modules/carros/repositories/in-memory/CarroRepositorioInMemory";
import { ListaCarrosDisponiveisService } from "./ListaCarrosDisponiveisService"

let listaCarrosDisponiveisService: ListaCarrosDisponiveisService;
let carroRepositorioInMemory: CarroRepositorioInMemory;

describe("Lista Carros",() => {
	beforeEach(() => {
		carroRepositorioInMemory = new CarroRepositorioInMemory();
		listaCarrosDisponiveisService = new ListaCarrosDisponiveisService(carroRepositorioInMemory);
	})

	it("deve ser possível listar todos os carros disponíveis",async () => {
		const carro = await carroRepositorioInMemory.criar({
			nome: "carro1",
			descricao: "Carro 1",
			valor_diario: 100,
			placa: "AsA-20420",
			valor_multa: 10,
			marca: "Audi",
			id_categoria: "categoria"
		})

		const carros = await listaCarrosDisponiveisService.execute({});

		expect(carros).toEqual([carro]);
	});

	it("Deve listar todos os carros disponíveis pelo nome",async () => {
		const carro = await carroRepositorioInMemory.criar({
			nome: "carro1",
			descricao: "Carro 1",
			valor_diario: 100,
			placa: "AsA-20420",
			valor_multa: 10,
			marca: "teste",
			id_categoria: "categoria"
		})

		const carros = await listaCarrosDisponiveisService.execute({
			marca: "teste"
		});

		expect(carros).toEqual([carro]);

	})
})