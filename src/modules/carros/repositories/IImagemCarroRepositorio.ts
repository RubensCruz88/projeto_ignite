import { ImagemCarro } from "../infra/typeorm/model/ImagemCarro"


interface IImagemCarroRepositorio {
	criar(carro_id: string, nome_imagem: string): Promise<ImagemCarro>;
}

export { IImagemCarroRepositorio }