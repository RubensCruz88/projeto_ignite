import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { ListaCategoriaService } from './ListaCategoriaService'

class ListaCategoriaController {

	async handle(request: Request, response: Response): Promise<Response> {
		const listaCategoriaService = container.resolve(ListaCategoriaService);

		try {
			const categorias = await listaCategoriaService.execute();
			
			return response.json(categorias);

		} catch(err){
			return response.status(404).json({erro: err.message});
		}

	}

}

export { ListaCategoriaController }