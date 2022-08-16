import { Request, Response } from 'express';
import { CriaCategoriaService } from './CriaCategoriaService';

class CriaCategoriaController {
	constructor( private criaCategoriaService: CriaCategoriaService){}

	handle(request: Request, response: Response): Response {
		const {nome, descricao} = request.body;
		const categoria = this.criaCategoriaService.execute({nome, descricao});

		return response.json(categoria);
	}

}

export { CriaCategoriaController }