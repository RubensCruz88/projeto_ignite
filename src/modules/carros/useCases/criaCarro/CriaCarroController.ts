import { Request, Response} from 'express';
import { container } from 'tsyringe';
import { CriaCarroService } from './CriaCarroService';

class CriaCarroController {
	async handle(request:Request, response: Response): Promise<Response> {
		const {nome, descricao, valor_diario, placa, valor_multa, marca, id_categoria} = request.body;

		const criaCarroService = container.resolve(CriaCarroService);

		const carro = await criaCarroService.execute({nome, descricao, valor_diario, placa, valor_multa, marca, id_categoria});

		return response.status(201).json({carro});
	}

}

export { CriaCarroController }