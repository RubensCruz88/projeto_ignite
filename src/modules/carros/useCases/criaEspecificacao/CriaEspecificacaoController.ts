import { Request, Response } from 'express';
import { CriaEspecificacaoService } from './CriaEspecificacaoService';

class CriaEspecificacaoController {
	constructor( private criaEspecificacaoService: CriaEspecificacaoService){}

	handle(request: Request, response: Response): Response {
		const {nome, descricao} = request.body;

		const especificacao = this.criaEspecificacaoService.execute({nome, descricao});

		return response.json(especificacao);
	}

}

export { CriaEspecificacaoController }