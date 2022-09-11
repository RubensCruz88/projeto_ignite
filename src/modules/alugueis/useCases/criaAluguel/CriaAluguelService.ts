
import { Aluguel } from "@modules/alugueis/infra/typeorm/model/Aluguel";
import { IAluguelRespositorio } from "@modules/alugueis/repositories/IAluguelRespositorio";
import { IDateProvider } from "@shared/container/providers/DateProvider/IDateProvider";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

interface IRequest {
	usuario_id: string;
	carro_id: string;
	data_retorno_esperado: Date;
}

@injectable()
class CriaAluguelService {
	constructor(
		@inject("AluguelRepositorio")
		private aluguelRepositorio: IAluguelRespositorio,

		@inject("DayjsDateProvider")
		private dateProvider: IDateProvider
	){}

	async execute({usuario_id, carro_id, data_retorno_esperado}: IRequest): Promise<Aluguel>{
		const carroIndisponivel = await this.aluguelRepositorio.buscaAluguelAbertoCarro(carro_id);
		const horaMinima = 24

		if(carroIndisponivel){
			throw new AppError("Carro indisponível")
		}

		const usuarioAluguelPendente = await this.aluguelRepositorio.buscaAluguelAbertoUsuario(usuario_id);

		if(usuarioAluguelPendente){
			throw new AppError("Usuario possui aluguel pendente")
		}

		const diferencaHoras = this.dateProvider.comparaEmHoras(new Date(), data_retorno_esperado);

		if(diferencaHoras < horaMinima){
			throw new AppError("O Aluguel deve ter duração mínima de 24 horas")
		}

		const aluguel = await this.aluguelRepositorio.criar({
			usuario_id,
			carro_id,
			data_retorno_esperado
		});

		return aluguel;

	}

}

export { CriaAluguelService }