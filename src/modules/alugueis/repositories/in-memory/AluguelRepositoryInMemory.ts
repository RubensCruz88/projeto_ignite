import { ICriaAluguelDTO } from '@modules/alugueis/dtos/ICriaAluguelDTO';
import { Aluguel } from '@modules/alugueis/infra/typeorm/model/Aluguel';
import { IAluguelRespositorio } from '../IAluguelRespositorio';

class AluguelRepositoryInMemory implements IAluguelRespositorio {
	alugueis: Aluguel[] = [];

	async buscaAluguelAbertoCarro(carro_id: string): Promise<Aluguel> {
		return this.alugueis.find(aluguel => aluguel.carro_id === carro_id && !aluguel.data_fim)
	}

	async buscaAluguelAbertoUsuario(usuario_id: string): Promise<Aluguel> {
		return this.alugueis.find(aluguel => aluguel.usuario_id === usuario_id && !aluguel.data_fim)
	}

	async criar({ carro_id, usuario_id, data_retorno_esperado }: ICriaAluguelDTO): Promise<Aluguel> {
		const aluguel = new Aluguel();

		Object.assign(aluguel,{
			carro_id,
			usuario_id,
			data_retorno_esperado,
			data_inicio: new Date()
		});

		this.alugueis.push(aluguel);

		return aluguel;
	}

}

export { AluguelRepositoryInMemory }