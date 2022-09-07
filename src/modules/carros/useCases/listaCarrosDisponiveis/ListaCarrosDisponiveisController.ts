import { Request, Response} from 'express';
import { container } from 'tsyringe';
import { ListaCarrosDisponiveisService } from './ListaCarrosDisponiveisService';

class ListaCarrosDisponiveisController {
	async handle(request: Request, response: Response){
		const { marca, nome, categoriaId} = request.query;

		const listaCarrosDisponivelService = container.resolve(ListaCarrosDisponiveisService);

		const carros = await listaCarrosDisponivelService.execute({
			marca: marca as string, 
			nome: nome as string,
			categoriaId: categoriaId as string
		});

		return response.json(carros);
	}

}

export { ListaCarrosDisponiveisController }