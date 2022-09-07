import { Carro } from "@modules/carros/infra/typeorm/model/Carro";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";
import { ICarroRepositorio } from '../../repositories/ICarroRepositorio';

interface IRequest {
	nome: string;
	descricao: string;
	valor_diario: number;
	placa: string;
	valor_multa: number;
	marca:string;
	id_categoria: string;
}

@injectable()
class CriaCarroService {

	constructor(
		@inject("CarroRepositorio")
		private carroRepositorio: ICarroRepositorio
	){}

	async execute({nome, descricao, valor_diario, placa, valor_multa, marca, id_categoria}: IRequest): Promise<Carro>{
		const carroExiste = await this.carroRepositorio.buscaPlaca(placa);

		if(carroExiste){
			throw new AppError("Placa já existe");
		}

		const carro = this.carroRepositorio.criar({
			nome,
			descricao,
			valor_diario,
			placa,
			valor_multa,
			marca,
			id_categoria
		});

		return carro
	}

}

export { CriaCarroService }