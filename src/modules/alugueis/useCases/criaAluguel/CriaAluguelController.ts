import { Request, Response} from 'express';
import { container } from 'tsyringe';
import { CriaAluguelService } from './CriaAluguelService';

class CriaAluguelController {
	async handle(request: Request, response: Response): Promise<Response>{
		const { carro_id, data_retorno_esperado } = request.body;
		const { id } = request.usuario;
		const criaAluguelService = container.resolve(CriaAluguelService);

		const aluguel = await criaAluguelService.execute({
			carro_id,
			usuario_id: id,
			data_retorno_esperado
		})

		return response.status(201).json(aluguel);
	}

}

export { CriaAluguelController }