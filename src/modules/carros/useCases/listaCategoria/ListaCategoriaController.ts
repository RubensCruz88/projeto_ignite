import { Request, Response } from 'express';
import { ListaCategoriaService } from './ListaCategoriaService'

class ListaCategoriaController {
	constructor( private listaCategoriaService: ListaCategoriaService){}

	handle(request: Request, response: Response): Response {
		const categorias = this.listaCategoriaService.execute();

		return response.json(categorias);
	}

}

export { ListaCategoriaController }