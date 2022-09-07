import { Especificacao } from "../infra/typeorm/model/Especificacao";

interface ICriaCarroDTO {
	id?: string;
	nome: string;
	descricao: string;
	valor_diario: number;
	placa: string;
	valor_multa: number;
	marca:string;
	id_categoria: string;
	especificacoes?: Especificacao[];
}

export { ICriaCarroDTO }