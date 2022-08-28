import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { CriaCategoriaService } from './CriaCategoriaService';

class CriaCategoriaController {

	async handle(request: Request, response: Response): Promise<Response> {
		const {nome, descricao} = request.body;

		const criaCategoriaService = container.resolve(CriaCategoriaService)

		const categoria = await criaCategoriaService.execute({nome, descricao});

		return response.json(categoria);
	}

}

export { CriaCategoriaController }