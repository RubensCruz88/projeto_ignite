import { Carro } from "@modules/carros/infra/typeorm/model/Carro";
import { ICarroRepositorio } from "@modules/carros/repositories/ICarroRepositorio";
import { IEspecificacaoRepositorio } from "@modules/carros/repositories/IEspecificacaoRepositorio";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

interface IRequest {
	carro_id: string;
	especificacoes_id: string[];
}

@injectable()
class CriaCarrroEsapecificacaoService {
	constructor(
		@inject("CarroRepositorio")
		private carrosRepositorio: ICarroRepositorio,

		@inject("EspecificacaoRepositorio")
		private especificacaoRepositorio: IEspecificacaoRepositorio
	){}

	async execute({carro_id, especificacoes_id}: IRequest): Promise<Carro>{
		const carroExiste = await this.carrosRepositorio.buscaPorId(carro_id);

		if(!carroExiste){
			throw new AppError("Carro não encontrado");
		}

		const especificacoes = await this.especificacaoRepositorio.buscaPorIds(especificacoes_id);

		carroExiste.especificacoes = especificacoes;

		await this.carrosRepositorio.criar(carroExiste);

		return carroExiste;
	}

}

export { CriaCarrroEsapecificacaoService }