import { IImagemCarroRepositorio } from "@modules/carros/repositories/IImagemCarroRepositorio";
import { inject, injectable } from "tsyringe";

interface IRequest {
	carro_id: string;
	nome_imagens: string[];
}

@injectable()
class UploadCarroImagemService {
	constructor(
		@inject("ImagemCarroRepositorio")
		private imagemCarroRepositorio: IImagemCarroRepositorio
	){}
	
	async execute({ carro_id, nome_imagens}: IRequest): Promise<void>{
		nome_imagens.map(async (imagem) => {
			await this.imagemCarroRepositorio.criar(carro_id, imagem);
		})
	}

}

export { UploadCarroImagemService }