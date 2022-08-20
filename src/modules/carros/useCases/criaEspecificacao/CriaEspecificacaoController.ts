import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { CriaEspecificacaoService } from './CriaEspecificacaoService';

class CriaEspecificacaoController {

	async handle(request: Request, response: Response): Promise<Response> {
		const {nome, descricao} = request.body;
		const criaEspecificacaoService = container.resolve(CriaEspecificacaoService);

		try {
			const especificacao = await criaEspecificacaoService.execute({nome, descricao});
	
			return response.json(especificacao);
	
		} catch(err){
			return response.status(400).json({erro: err.message});
		}
	}

}

export { CriaEspecificacaoController }