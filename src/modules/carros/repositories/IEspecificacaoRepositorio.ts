import { ICriaEspecificacaoDTO } from '../DTOs/ICriaEspecificacaoDTO';
import { Especificacao } from '../infra/typeorm/model/Especificacao';

interface IEspecificacaoRepositorio {
	create({ nome, descricao }: ICriaEspecificacaoDTO): Promise<Especificacao>;
	list(): Promise<Especificacao[]>;
	VerificaDuplicado(nome: string): Promise<Especificacao>;
	buscaPorIds(id: string[]): Promise<Especificacao[]>;
}

export { IEspecificacaoRepositorio }