import { ICriaAluguelDTO } from "../dtos/ICriaAluguelDTO";
import { Aluguel } from "../infra/typeorm/model/Aluguel"

interface IAluguelRespositorio {
	buscaAluguelAbertoCarro(carro_id: string): Promise<Aluguel>
	buscaAluguelAbertoUsuario(usuario_id: string): Promise<Aluguel>
	criar({ carro_id, usuario_id, data_retorno_esperado }: ICriaAluguelDTO): Promise<Aluguel>
}

export { IAluguelRespositorio };