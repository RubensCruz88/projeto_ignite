import { Request, Response} from 'express';
import { ListaCategoriaService } from '../services/ListaCategoriaService';

class ListaCategoriaController{
	private listaCategoriaService: ListaCategoriaService;

	constructor(){
		this.listaCategoriaService = new ListaCategoriaService();
	}

	handle( request: Request, response: Response) : Response{
		const categorias = this.listaCategoriaService.execute();
		
		return response.json(categorias); 
	}
}

export { ListaCategoriaController }