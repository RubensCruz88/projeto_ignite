import { Especificacao } from '../model/Especificacao';

interface ICriaEspecificacaoDTO {
	nome: string;
	descricao: string;
}

class EspecificacaoRepositorio {
	private especificacoes: Especificacao[];

	private static INSTANCE: EspecificacaoRepositorio;

	constructor(){
		this.especificacoes = [];
	}

	public static getInstance(): EspecificacaoRepositorio {
		if (!EspecificacaoRepositorio.INSTANCE) {
			EspecificacaoRepositorio.INSTANCE = new EspecificacaoRepositorio();
		}

		return EspecificacaoRepositorio.INSTANCE;
	};

	create({ nome, descricao }: ICriaEspecificacaoDTO): Especificacao {
		const especificacao = new Especificacao();

		Object.assign(especificacao,{
			nome,
			descricao,
			created_at: new Date()
		})

		this.especificacoes.push(especificacao);

		return especificacao;
	};

	list(): Especificacao[] {
		return this.especificacoes;
	}

	VerificaDuplicado(nome: string): Especificacao {
		const especificacao = this.especificacoes.find( especificacao => especificacao.nome === nome);

		return especificacao;
	}

}

export { EspecificacaoRepositorio };