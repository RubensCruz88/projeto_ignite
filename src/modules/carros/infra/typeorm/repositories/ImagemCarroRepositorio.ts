import { IImagemCarroRepositorio } from "@modules/carros/repositories/IImagemCarroRepositorio";
import { dataSource } from "@shared/infra/typeorm/dataSource";
import { Repository } from "typeorm";
import { ImagemCarro } from "../model/ImagemCarro";

class ImagemCarroRepositorio implements IImagemCarroRepositorio{
	private repositorio: Repository<ImagemCarro>;

	constructor(){
		this.repositorio = dataSource.getRepository(ImagemCarro);
	}

	async criar(carro_id: string, nome_imagem: string): Promise<ImagemCarro> {
		const carroImagem = this.repositorio.create({
			carro_id,
			nome_imagem
		})

		await this.repositorio.save(carroImagem);

		return carroImagem;
	}

}

export { ImagemCarroRepositorio }