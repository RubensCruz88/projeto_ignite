import { Carro } from "@modules/carros/infra/typeorm/model/Carro";
import { ICarroRepositorio } from "@modules/carros/repositories/ICarroRepositorio";
import { inject, injectable } from "tsyringe";

interface IRequest {
	categoriaId?: string;
	marca?: string;
	nome?: string;
}

@injectable()
class ListaCarrosDisponiveisService {
	constructor(
		@inject("CarroRepositorio")
		private carroRepositorio: ICarroRepositorio
	){}

	async execute({ marca, categoriaId, nome}: IRequest): Promise<Carro[]> {
		const carros = await this.carroRepositorio.listaDisponiveis(marca, categoriaId, nome);

		return carros;
	}

}

export { ListaCarrosDisponiveisService }