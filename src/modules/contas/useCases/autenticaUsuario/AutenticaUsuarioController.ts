import {Request, Response} from 'express';
import { container } from 'tsyringe';
import { AutenticaUsuarioService } from './AutenticaUsuarioService';

class AutenticaUsuarioController{
	async handle(request: Request, response: Response): Promise<Response>{
		const { senha, email} = request.body;

		const autenticaUsuarioService = container.resolve(AutenticaUsuarioService);

		try {
			const token = await autenticaUsuarioService.execute({email, senha});

			return response.status(201).json(token);
		} catch(err) {
			return response.status(400).json({err: err.message});
		}

	}

}

export { AutenticaUsuarioController }