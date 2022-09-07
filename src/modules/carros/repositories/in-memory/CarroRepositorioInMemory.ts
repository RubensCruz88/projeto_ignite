import { ICriaCarroDTO } from "@modules/carros/DTOs/ICriaCarroDTO";
import { Carro } from "@modules/carros/infra/typeorm/model/Carro";
import { ICarroRepositorio } from "../ICarroRepositorio";

class CarroRepositorioInMemory implements ICarroRepositorio{
	carros: Carro[] = [];

	async criar({nome, descricao, id_categoria, marca, placa, valor_diario, valor_multa}: ICriaCarroDTO): Promise<Carro>{
		const carro = new Carro();

		Object.assign(carro,{
			nome,
			descricao,
			id_categoria,
			marca,
			placa,
			valor_diario,
			valor_multa
		});

		this.carros.push(carro);

		return carro;
	}

	async buscaPlaca(placa: string): Promise<Carro>{
		return this.carros.find((carro) => carro.placa === placa);
	}

	async listaDisponiveis(
		marca?: string, 
		categoriaId?: string, 
		nome?: string
	): Promise<Carro[]> {
		const carros = this.carros
			.filter((carro) => carro.disponivel)
			.filter(carro => (!marca || carro.marca === marca))
			.filter(carro => (!categoriaId || carro.id_categoria === categoriaId))
			.filter(carro => (!nome || carro.nome === nome))
		
		return carros;
	}

	async buscaPorId(id: string): Promise<Carro> {
		const carro = this.carros.find(carro => carro.id === id);

		return carro
	}

}

export { CarroRepositorioInMemory }