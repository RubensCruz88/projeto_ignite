import { ICriaEspecificacaoDTO } from "@modules/carros/DTOs/ICriaEspecificacaoDTO"
import { Especificacao } from "@modules/carros/infra/typeorm/model/Especificacao"
import { isDebuggerStatement } from "typescript";
import { IEspecificacaoRepositorio } from "../IEspecificacaoRepositorio"

class EspecificacaoRepositorioInMemory implements IEspecificacaoRepositorio{
	especificacoes: Especificacao[] = []

	async create({ nome, descricao }: ICriaEspecificacaoDTO): Promise<Especificacao> {
		const especificacao = new Especificacao();

		Object.assign(especificacao,{
			nome,
			descricao
		})

		this.especificacoes.push(especificacao);

		return especificacao;
	}

	async list(): Promise<Especificacao[]> {
		return this.especificacoes
	}

	async VerificaDuplicado(nome: string): Promise<Especificacao> {
		return this.especificacoes.find(especificacao => especificacao.nome === nome);
	}

	async buscaPorIds(id: string[]): Promise<Especificacao[]> {
		return this.especificacoes.filter(especificacao => id.includes(especificacao.id));
	}
}

export { EspecificacaoRepositorioInMemory }