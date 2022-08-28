import { Request, Response} from 'express';
import { container } from 'tsyringe';
import { CriaUsuarioService } from './CriaUsuarioService';


class CriaUsuarioController {
	async handle(request: Request, response: Response): Promise<Response>{
		const {name, email, password, driver_license} = request.body;

		const criaUsuarioService = container.resolve(CriaUsuarioService);

		try {
			const usuario = await criaUsuarioService.execute({name, email, password, driver_license});

			return response.status(201).json(usuario);
		} catch(err){
			return response.status(404).json({erro: err.message});
		}
	}
	
}

export { CriaUsuarioController }