import { ICriaCarroDTO } from "../DTOs/ICriaCarroDTO";
import { Carro } from "../infra/typeorm/model/Carro";

interface ICarroRepositorio {
	criar(data: ICriaCarroDTO): Promise<Carro>;
	buscaPlaca(placa: string): Promise<Carro>;
	listaDisponiveis(
		marca?: string, 
		categoriaId?: string, 
		nome?: string
	): Promise<Carro[]>;
	buscaPorId(id: string): Promise<Carro>;
}

export { ICarroRepositorio }