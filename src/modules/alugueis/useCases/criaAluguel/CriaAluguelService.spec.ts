import { AluguelRepositoryInMemory } from "@modules/alugueis/repositories/in-memory/AluguelRepositoryInMemory";
import { AppError } from "@shared/errors/AppError";
import { CriaAluguelService } from "./CriaAluguelService";
import { DayjsDateProvider } from '@shared/container/providers/DateProvider/implementations/DayjsDateProvider';

let criaAluguelService: CriaAluguelService;
let aluguelRepositorioInMemory: AluguelRepositoryInMemory;
let dayJsProvider: DayjsDateProvider;

describe("Cria Aluguel",() => {

	beforeEach(() => {
		aluguelRepositorioInMemory = new AluguelRepositoryInMemory();
		dayJsProvider = new DayjsDateProvider();
		criaAluguelService = new CriaAluguelService(aluguelRepositorioInMemory, dayJsProvider);

	});

	it("Deve ser possível criar um novo aluguel",async () => {
		const diaMais24h = dayJsProvider.somaDias(new Date(),1);

		const aluguel = await criaAluguelService.execute({
			carro_id: "12345",
			usuario_id: "1111",
			data_retorno_esperado: diaMais24h
		});

		expect(aluguel).toHaveProperty("id");
		expect(aluguel).toHaveProperty("data_inicio");

	});

	it("Não deve ser possível criar um novo aluguel para um usuario com aluguel em aberto",() => {
		expect(async () => {
			const diaMais24h = dayJsProvider.somaDias(new Date(),1);

			await criaAluguelService.execute({
				carro_id: "12555345",
				usuario_id: "1111",
				data_retorno_esperado: diaMais24h
			});
	
			const aluguel = await criaAluguelService.execute({
				carro_id: "12345",
				usuario_id: "1111",
				data_retorno_esperado: diaMais24h
			});
	
		}).rejects.toBeInstanceOf(AppError);
	});

	it("Não deve ser possível criar um novo aluguel para um carro não disponível",() => {
		expect(async () => {
			const diaMais24h = dayJsProvider.somaDias(new Date(),1);

			await criaAluguelService.execute({
				carro_id: "12345",
				usuario_id: "12345",
				data_retorno_esperado: diaMais24h
			});
	
			await criaAluguelService.execute({
				carro_id: "12345",
				usuario_id: "1111",
				data_retorno_esperado: diaMais24h
			});
	
		}).rejects.toBeInstanceOf(AppError);
	});

	it("Não deve ser possível criar um novo aluguel com hora de retorno invalida",() => {
		expect( async () => {
			await criaAluguelService.execute({
				carro_id: "12345",
				usuario_id: "12345",
				data_retorno_esperado: new Date()
			});
			
		}).rejects.toBeInstanceOf(AppError);
	});

})	

