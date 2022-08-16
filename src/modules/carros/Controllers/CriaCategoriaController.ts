import { Request, Response} from 'express';
import { CriaCategoriaService } from '../services/CriaCategoriaService';

class CriaCategoriaController{
	private criaCategoriaService: CriaCategoriaService;

	constructor(){
		this.criaCategoriaService = new CriaCategoriaService();
	}

	handle( request: Request, response: Response): Response{
		const { nome, descricao } = request.body;

		this.criaCategoriaService.execute({nome, descricao});
	
		return response.status(201).send();
	}
}

export { CriaCategoriaController };
