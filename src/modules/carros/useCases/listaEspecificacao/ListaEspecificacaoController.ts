import { Request, Response } from 'express';
import { ListaEspecificacaoService } from './ListaEspecificacaoService'

class ListaEspecificacaoController {
	constructor( private listaEspecificacaoService: ListaEspecificacaoService){}

	handle(request: Request, response: Response): Response {
		const especificacao = this.listaEspecificacaoService.execute();

		return response.json(especificacao);
	}

}

export { ListaEspecificacaoController }