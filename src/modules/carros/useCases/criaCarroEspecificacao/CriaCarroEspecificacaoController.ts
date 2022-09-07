import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CriaCarrroEsapecificacaoService } from './CriaCarrroEspecificacaoService';

class CriaCarroEspecificacaoController {
	async handle(request: Request, response: Response){
		const { id } = request.params;
		const { especificacoes_id } = request.body;
		
		const criaCarroEspecificacaoService = container.resolve(CriaCarrroEsapecificacaoService)
	
		const carro = await criaCarroEspecificacaoService.execute({
			carro_id: id,
			especificacoes_id
		});

		return response.json(carro);
	
	
	}

}

export { CriaCarroEspecificacaoController }