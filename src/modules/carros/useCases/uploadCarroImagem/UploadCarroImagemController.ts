import { Request, Response} from 'express';
import { container } from 'tsyringe';
import { UploadCarroImagemService } from './UploadCarroImagemService';

interface IArquivos {
	filename: string
}

class UploadCarroImagemController {
	async handle(request: Request, response: Response): Promise<Response>{
		const { id } = request.params;
		const imagens = request.files as IArquivos[];

		const uploadCarroImagemService = container.resolve(UploadCarroImagemService);

		const nome_imagens = imagens.map((arquivo) => arquivo.filename);

		await uploadCarroImagemService.execute({
			carro_id: id,
			nome_imagens
		});

		return response.status(201).send()
	}

}

export { UploadCarroImagemController }