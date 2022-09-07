import { ICarroRepositorio } from "@modules/carros/repositories/ICarroRepositorio";
import { Repository } from "typeorm";
import { Carro } from "../model/Carro";
import { dataSource } from '@shared/infra/typeorm/dataSource';
import { ICriaCarroDTO } from "@modules/carros/DTOs/ICriaCarroDTO";

class CarroRepositorio implements ICarroRepositorio{
	private repositorio: Repository<Carro>

	constructor(){
		this.repositorio = dataSource.getRepository(Carro);
	}

	async criar({id, nome, descricao, valor_diario, placa, valor_multa, marca, id_categoria, especificacoes}: ICriaCarroDTO): Promise<Carro>{
		const carro = this.repositorio.create({
			id,
			nome,
			descricao,
			valor_diario,
			placa,
			valor_multa,
			marca,
			id_categoria,
			especificacoes
		});

		await this.repositorio.save(carro);

		return carro;
	}

	async buscaPlaca(placa: string): Promise<Carro> {
		const carro = await	this.repositorio.findOneBy({placa});

		return carro;
	}

	async listaDisponiveis(marca?: string, categoriaId?: string, nome?: string): Promise<Carro[]> {
		const carrosQuery = await this.repositorio
			.createQueryBuilder("carro")
			.where("disponivel = :disponivel",{disponivel: true})

		if(marca) {
			carrosQuery.andWhere("marca = :marca",{marca})
		};

		if(categoriaId) {
			carrosQuery.andWhere("id_categoria = :categoriaId",{categoriaId})
		};

		if(nome){
			carrosQuery.andWhere("nome = :nome",{nome})
		};

		const carros = await carrosQuery.getMany();

		return carros

	}

	async buscaPorId(id: string): Promise<Carro> {
		const carro = await this.repositorio.findOneBy({id});

		return carro;
	}
}

export { CarroRepositorio }