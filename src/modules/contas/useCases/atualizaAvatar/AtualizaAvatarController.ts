import { Request, Response} from 'express';
import { container } from 'tsyringe';
import { AtualizaAvatarService } from './AtualizaAvatarService';

class AtualizaAvatarController{
	async handle(request: Request, response: Response): Promise<Response> {
		const { id } = request.usuario;

		const arquivoAvatar = request.file.filename;

		const atualizaAvatarService = container.resolve(AtualizaAvatarService);

		await atualizaAvatarService.execute({user_id: id,arquivoAvatar});

		return response.status(200).send()
	}
}

export { AtualizaAvatarController }