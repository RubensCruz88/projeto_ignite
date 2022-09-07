import { CarroRepositorioInMemory } from "@modules/carros/repositories/in-memory/CarroRepositorioInMemory";
import { EspecificacaoRepositorioInMemory } from "@modules/carros/repositories/in-memory/EspecificacaoRepositorioInMemory";
import { AppError } from "@shared/errors/AppError";
import { CriaCarrroEsapecificacaoService } from "./CriaCarrroEspecificacaoService"

let criaCarroEspecificacaoService: CriaCarrroEsapecificacaoService;
let carroRepositorioInMemory: CarroRepositorioInMemory;
let especificacaoRepositorioInMemory: EspecificacaoRepositorioInMemory;

describe("Cria Especificacao Carro",() => {
	beforeEach(() => {
		carroRepositorioInMemory = new CarroRepositorioInMemory();
		especificacaoRepositorioInMemory = new EspecificacaoRepositorioInMemory();
		criaCarroEspecificacaoService = new CriaCarrroEsapecificacaoService(
			carroRepositorioInMemory,
			especificacaoRepositorioInMemory
		);
	})


	it("Não deve ser possível adicionar uma especificação em um carro não existente",() => {
		expect(async () => {
			const carro_id = "123";
			const especificacoes_id = ["000"];
	
			await criaCarroEspecificacaoService.execute({carro_id, especificacoes_id});
		}).rejects.toBeInstanceOf(AppError);
		
	});


	it("Deve ser possível adicionar uma nova especificação ao carro",async () => {
		const carro = await carroRepositorioInMemory.criar({
			nome: "Carro1", 
			descricao: "Carro1", 
			id_categoria: "categoria1", 
			marca: "Audi",
			placa: "XXX-XXXX",
			valor_diario: 100,
			valor_multa: 40
		});

		const especificacao = await especificacaoRepositorioInMemory.create({
			nome: "teste",
			descricao: "descricao teste"
		})

		const especificacoes_id = [especificacao.id];

		const especificacoesCarros = await criaCarroEspecificacaoService.execute({
			carro_id: carro.id,
			especificacoes_id
		});

		expect(especificacoesCarros).toHaveProperty("especificacoes");
		expect(especificacoesCarros.especificacoes.length).toBe(1);
		
	})
})