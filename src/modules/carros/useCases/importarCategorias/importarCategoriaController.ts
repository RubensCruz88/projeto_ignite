import { Request, Response} from 'express';
import { ImportarCategoriaUseCase } from './importarCategoriaUseCase';

class ImportarCategoriaController{
	constructor(private importarCategoriaUseCase: ImportarCategoriaUseCase){}

	handle(request: Request, response: Response): Response {
		const { file } = request;

		this.importarCategoriaUseCase.execute(file);

		return response.send();
	}
}

export { ImportarCategoriaController }