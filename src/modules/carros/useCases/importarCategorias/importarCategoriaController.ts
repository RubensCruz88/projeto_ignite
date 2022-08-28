import { container } from 'tsyringe'
import { Request, Response} from 'express';
import { ImportarCategoriaService } from './importarCategoriaService';

class ImportarCategoriaController{

	async handle(request: Request, response: Response): Promise<Response> {
		const { file } = request;

		const importaCategoriaService = container.resolve(ImportarCategoriaService);

		await importaCategoriaService.execute(file);

		return response.send();
	}
}

export { ImportarCategoriaController }