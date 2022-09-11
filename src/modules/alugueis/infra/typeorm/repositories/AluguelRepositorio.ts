import { ICriaAluguelDTO } from "@modules/alugueis/dtos/ICriaAluguelDTO";
import { IAluguelRespositorio } from "@modules/alugueis/repositories/IAluguelRespositorio";
import { dataSource } from "@shared/infra/typeorm/dataSource";
import { Repository } from "typeorm";
import { Aluguel } from "../model/Aluguel";

class AluguelRepositorio implements IAluguelRespositorio{
	private repositorio: Repository<Aluguel>

	constructor(){
		this.repositorio = dataSource.getRepository(Aluguel);
	}

	async buscaAluguelAbertoCarro(carro_id: string): Promise<Aluguel> {
		const aluguel = await this.repositorio.findOneBy({ carro_id });

		return aluguel
	}

	async buscaAluguelAbertoUsuario(usuario_id: string): Promise<Aluguel> {
		const aluguel = await this.repositorio.findOneBy({ usuario_id });

		return aluguel
	}

	async criar({ carro_id, usuario_id, data_retorno_esperado }: ICriaAluguelDTO): Promise<Aluguel> {
		const aluguel = this.repositorio.create({
			carro_id,
			data_retorno_esperado,
			usuario_id
		});

		await this.repositorio.save(aluguel);

		return aluguel;
	}

}

export { AluguelRepositorio }