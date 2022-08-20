import { container } from 'tsyringe'
import { Request, Response } from 'express';
import { ListaEspecificacaoService } from './ListaEspecificacaoService'

class ListaEspecificacaoController {

	async handle(request: Request, response: Response): Promise<Response> {
		const listaCategoriaService = container.resolve(ListaEspecificacaoService);

		const especificacao = await listaCategoriaService.execute();

		return response.json(especificacao);
	}

}

export { ListaEspecificacaoController }